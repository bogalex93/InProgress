import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { UIkit, ModalEvents, UIkitModalElement, UIkitModalOptions } from 'app/shared/types/uikit.types';
import { UIkitComponent } from 'app/shared/custom-decorators';
import { Folder, Note, NoteStates } from 'app/models/models';
import { Crossover } from 'crossover/crossover-ipc.renderer';
import { ConfigurationChannel, DataChannel } from 'crossover/crossover.channels';
import { AppConfig, DisplayInfo, GenericData } from 'crossover/crossover.models';
import * as lodash from 'lodash';
import { ThrowStmt } from '@angular/compiler';
import { app } from 'electron';
import * as _ from 'lodash';
import { NoteActions } from './note-actions';

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
  public newNote: Note = {};

  public appConfig: AppConfig = { minimized: false };
  public display: DisplayInfo;
  public electronWindow: Electron.BrowserWindow;
  public tempDictionary : {folderToDelete?: Folder} = {};
 
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
      this.electronWindow = Crossover.electron.remote.getCurrentWindow();
      this.appConfig.width = this.electronWindow.getBounds().width;
      // this.electronWindow.on('close', (e) => {
      //   e.preventDefault();
      //   this.saveToDisk();
      //   //setTimeout(() => this.electronWindow.close(), 500);
      // });
      console.log(this.electronWindow.getBounds());
      this.display = await Crossover.get<DisplayInfo>(ConfigurationChannel.with(DisplayInfo));
      this.folders = await Crossover.get<Folder[]>(DataChannel.with(GenericData), <GenericData>{ storeName: 'notes', action: 'get' });
    }
    if (!this.folders) { this.folders = [{ name: "General", notes: [], isDefault: true }]; }
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

  public async saveFolder(input: HTMLInputElement) {
    this.folders.push({ name: input.value, notes: [] });
    this.selectFolder(this.folders[this.folders.length - 1]);
    this.creteFolderModal.hide();
    input.value = '';
    this.saveToDisk();
  }

  public createNote() {
    if (this.appConfig.minimized) {
      this.toggleView();
    }
    this.newNote = { lines: [{}] };
    this.addNotesModal.show();
  }

  public saveNote() {
    this.newNote.date = new Date(Date.now());
    this.selectedFolder.notes.push(this.newNote);
    this.addNotesModal.hide();
  }

  private saveToDisk() {
    Crossover.send<GenericData>(DataChannel.with(GenericData), { storeName: 'notes', data: this.folders, action: 'save' });
  }

  public deleteFolder(folder : Folder){
     this.tempDictionary.folderToDelete = folder;
     this.deleteFolderModal.show();
  }

  public confirmDeleteFolder(){
    var index = this.folders.indexOf(this.tempDictionary.folderToDelete);
    this.folders.splice(index,1);
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
      var centerY = this.display.height / 2 - 150;
      this.electronWindow.setBounds({ width: 50, height: 300, x: this.display.width - 50, y: centerY });
    }
    else {
      this.electronWindow.setBounds({ width: this.appConfig.width, height: this.display.height, x: this.display.width - this.appConfig.width, y: 0 });
    }
  }
}

