import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { UIkit, ModalEvents, UIkitModalElement, UIkitModalOptions } from 'shared/types/uikit.types';
import { UIkitComponent } from 'shared/custom-decorators';
import { Folder, Note, NoteStates } from 'models/models';
import * as lodash from 'lodash';
import { app, BrowserWindow } from 'electron';
import * as _ from 'lodash';
import { NoteActions } from './note-actions';
import * as crypto from "crypto-js";
import { Guid } from 'js-guid';
import { AppConfig, DisplayInfo, GenericData } from '../../crossover/crossover.models';
import { Crossover } from '../../crossover/crossover-ipc.renderer';
import { ConfigurationChannel, DataChannel } from '../../crossover/crossover.channels';

const uikit: UIkit = (window as any).UIkit;

@Component({ selector: 'app-root', templateUrl: './root.component.html', styleUrls: ['./root.component.scss'] })
export class RootComponent implements OnInit, AfterViewInit {

  public lodash = lodash;
  @ViewChild('addNoteModalRef')
  @UIkitComponent(uikit.modal)
  public addNotesModal: UIkitModalElement;

  @ViewChild('createFolderModalRef')
  @UIkitComponent(uikit.modal)
  public creteFolderModal: UIkitModalElement;

  @ViewChild('deleteFolderModalRef')
  @UIkitComponent(uikit.modal)
  public deleteFolderModal: UIkitModalElement;

  public modalVisible: boolean;
  public folders: Folder[];
  public selectedFolder: Folder;

  public console = console;

  public appConfig: AppConfig = { minimized: false };
  public display: DisplayInfo;
  public electronWindow: BrowserWindow;
  public tempDictionary: { folderToDelete?: Folder, positionInterval?: any, newNote?: Note } = {};
  public aperenceTypes = AperenceTypes;

  public get aperenceIsWidget() { return this.appConfig.minimizedAperence === AperenceTypes.widget }
  public get aperenceIsSidebar() { return this.appConfig.minimizedAperence === AperenceTypes.sidebar }

  public get folderStats() {
    return {
      notesCount: this.selectedFolder.notes.length,
      completedNotes: this.selectedFolder.notes.filter(n => n.state == NoteStates.completed).length,
      inProgressNotes: this.selectedFolder.notes.filter(n => n.state == NoteStates.inProgress).length
    }
  }

  constructor(private elementRef: ElementRef) {
  }

  async ngOnInit(): Promise<void> {
    if (Crossover.isElectronRunning) {
      this.electronWindow = Crossover.browserWindow;
      this.appConfig.width = this.electronWindow.getBounds().width;
      // this.electronWindow.on('close', (e) => {
      //   e.preventDefault();
      //   this.saveToDisk();
      //   //setTimeout(() => this.electronWindow.close(), 500);
      // });
      console.log(this.electronWindow.getBounds());
      this.display = await Crossover.get<DisplayInfo>(ConfigurationChannel.with(DisplayInfo));
      this.folders = await Crossover.get<Folder[]>(DataChannel.with(GenericData), <GenericData>{ storeName: 'notes', action: 'get' });
      this.setMinimizedAperence(AperenceTypes.widget);
    }
    if (!this.folders) { this.folders = [{id: Guid.newGuid().toString(), name: "General", notes: [], isDefault: true }]; }
    if (!this.selectedFolder) { this.selectFolder(this.folders[0]); }
  }

  async ngAfterViewInit(): Promise<void> {
    uikit.util.on(this.addNotesModal.$el, ModalEvents.show, e => this.modalVisible = true);
    uikit.util.on(this.addNotesModal.$el, ModalEvents.hidden, e => this.modalVisible = false);
    uikit.util.on(this.creteFolderModal.$el, ModalEvents.show, e => this.modalVisible = true);
    uikit.util.on(this.creteFolderModal.$el, ModalEvents.hidden, e => this.modalVisible = false);
    uikit.util.on(this.deleteFolderModal.$el, ModalEvents.show, e => this.modalVisible = true);
    uikit.util.on(this.deleteFolderModal.$el, ModalEvents.hidden, e => this.modalVisible = false);

    this.addNotesModal.$el.style.right = '46px';
    this.creteFolderModal.$el.style.right = '46px';
    this.deleteFolderModal.$el.style.right = '46px';
    (<HTMLElement>document.body).style.setProperty('--border-radius', '15px');
    //(<HTMLElement>this.elementRef.nativeElement).style.setProperty('--border-radius', '10px');
  }

  public selectFolder(folder: Folder) {
    this.folders.forEach(f => f.selected = false);
    folder.selected = true;
    this.selectedFolder = folder;
    this.saveToDisk();
  }

  public async saveFolder(folderNameInput: HTMLInputElement, classifiedInput: HTMLInputElement) {
    this.folders.push({ id: Guid.newGuid().toString(), name: folderNameInput.value, notes: [], classified: Boolean(classifiedInput.value) });
    this.selectFolder(this.folders[this.folders.length - 1]);
    this.creteFolderModal.hide();
    folderNameInput.value = '';
    classifiedInput.value = null;
    this.saveToDisk();
  }

  public createNote() {
    if (this.appConfig.minimized) {
      this.toggleView();
    }
    this.tempDictionary.newNote = { id: Guid.newGuid().toString(), lines: [{}] };
    this.addNotesModal.show();
  }

  public saveNote() {
    this.tempDictionary.newNote.date = new Date(Date.now());
    this.selectedFolder.notes.push(this.tempDictionary.newNote);
    this.addNotesModal.hide();
    //alert(crypto.AES.encrypt(JSON.stringify(this.newNote), 'key'));
  }

  private saveToDisk() {
    Crossover.send<GenericData>(DataChannel.with(GenericData), { storeName: 'notes', data: this.folders, action: 'save' });
  }

  public deleteFolder(folder: Folder) {
    this.tempDictionary.folderToDelete = folder;
    this.deleteFolderModal.show();
  }

  public confirmDeleteFolder() {
    var index = this.folders.indexOf(this.tempDictionary.folderToDelete);
    this.folders.splice(index, 1);
    this.saveToDisk();
    this.tempDictionary.folderToDelete = null;
    this.deleteFolderModal.hide();
  }

  public changeWindowSize(value) {
    this.appConfig.width += value;
    this.electronWindow.setBounds({ width: this.appConfig.width, height: this.display.height, x: this.display.width - this.appConfig.width, y: 0 });
  }

  public async toggleView() {
    this.appConfig.minimized = !this.appConfig.minimized;

    if (this.appConfig.minimized) {
      this.electronWindow.setBounds(this.appConfig.minimizedBounds);
      //(<any>this.electronWindow).setBlur(false);
      this.tempDictionary.positionInterval = setInterval(e => this.appMoved(), 3000);
    }
    else {
      this.electronWindow.setBounds({ width: this.appConfig.width, height: this.display.height, x: this.display.width - this.appConfig.width, y: 0 });
      (<any>this.electronWindow).setBlur(true);
      clearInterval(this.tempDictionary.positionInterval);
    }
  }

  public setMinimizedAperence(aperence: AperenceTypes) {
    this.appConfig.minimizedAperence = aperence;
    if (aperence == AperenceTypes.widget) {
      this.appConfig.minimizedBounds = { width: 250, height: 150, x: this.display.width - 450, y: 0 }
    }
    if (aperence == AperenceTypes.sidebar) {
      var centerY = this.display.height / 2 - 150;
      this.appConfig.minimizedBounds = { width: 50, height: 300, x: this.display.width - 50, y: centerY };
    }
  }

  public appMoved() {
    if (this.appConfig.minimized) {
      var windowBounds = this.electronWindow.getBounds();
      this.appConfig.minimizedBounds = windowBounds;
    }
    else {
      clearInterval(this.tempDictionary.positionInterval);
    }
  }

  public close() {
    this.electronWindow.close();
  }

  public preventDefault(event: MouseEvent) {
    event.preventDefault();
  }
}

enum AperenceTypes {
  widget = 'widget',
  sidebar = 'sidebar'
}