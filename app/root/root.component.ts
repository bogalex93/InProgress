import { Component, ViewChild, AfterViewInit, ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { UIkit, ModalEvents, UIkitModalElement, UIkitModalOptions } from 'app/shared/types/uikit.types';
import { UIkitComponent } from 'app/shared/custom-decorators';
import { DataStores, Folder, Note, NoteStates } from 'app/models/models';
import { Crossover } from 'crossover/crossover-ipc.renderer';
import { ConfigurationChannel, DataChannel } from 'crossover/crossover.channels';
import { AppConfig, DisplayInfo, GenericData, ReadData } from 'crossover/crossover.models';
import * as lodash from 'lodash';
import { ParsedEventType, ThrowStmt } from '@angular/compiler';
import { app } from 'electron';
import * as _ from 'lodash';
import { NoteActions } from '../core/notes-list/note-actions';
import * as crypto from "crypto-js";
import { NoteEvent, NoteEvents, NotesListComponent } from 'app/core/notes-list/notes-list.component';
import { v4 as uuid } from 'uuid';
const uikit: UIkit = (window as any).UIkit;

@Component({ selector: 'app-root', templateUrl: './root.component.html', styleUrls: ['./root.component.scss'] })
export class RootComponent implements OnInit, AfterViewInit {

  public lodash = lodash;

  @ViewChild('createFolderModalRef')
  @UIkitComponent(uikit.modal)
  public creteFolderModal: UIkitModalElement;

  @ViewChild('deleteFolderModalRef')
  @UIkitComponent(uikit.modal)
  public deleteFolderModal: UIkitModalElement;

  @ViewChild('notesList') notesList: NotesListComponent;

  public modalVisible: boolean;
  private defaultFolder = { id: uuid(), name: 'Generic', selected: true, isDefault: true };
  public folders: Folder[] = [];
  public notes: Note[] = [];
  public selectedFolder: Folder = this.defaultFolder;

  public console = console;

  public appConfig: AppConfig = { minimized: false };
  public display: DisplayInfo;
  public electronWindow: Electron.BrowserWindow;
  public tempDictionary: { folderToDelete?: Folder, positionInterval?: any } = {};
  public aperenceTypes = AperenceTypes;

  public get aperenceIsWidget() { return this.appConfig.minimizedAperence === AperenceTypes.widget }
  public get aperenceIsSidebar() { return this.appConfig.minimizedAperence === AperenceTypes.sidebar }

  public get folderStats() {
    return this.selectedFolder ? {
      notesCount: this.notes.length,
      completedNotes: this.notes.filter(n => n.state == NoteStates.completed).length,
      inProgressNotes: this.notes.filter(n => n.state == NoteStates.inProgress).length
    } : {}
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
      var folders = await Crossover.get<Folder[]>(DataChannel.with(ReadData), <ReadData>{ dataStore: DataStores.folders });
      if (folders.length == 0) {
        this.folders.push(this.defaultFolder);
        this.saveToDisk({ action: 'add', entity: this.defaultFolder, dataStore: DataStores.folders });
      }
      else {        
        this.folders = folders;
      }

      this.setMinimizedAperence(AperenceTypes.widget);
    }

    this.selectFolder(this.folders.find(f => f.selected));

  }

  async ngAfterViewInit(): Promise<void> {

    uikit.util.on(this.creteFolderModal.$el, ModalEvents.show, e => this.modalVisible = true);
    uikit.util.on(this.creteFolderModal.$el, ModalEvents.hidden, e => this.modalVisible = false);
    uikit.util.on(this.deleteFolderModal.$el, ModalEvents.show, e => this.modalVisible = true);
    uikit.util.on(this.deleteFolderModal.$el, ModalEvents.hidden, e => this.modalVisible = false);
    this.creteFolderModal.$el.style.right = '46px';
    this.deleteFolderModal.$el.style.right = '46px';
    (<HTMLElement>document.body).style.setProperty('--border-radius', '15px');
    //(<HTMLElement>this.elementRef.nativeElement).style.setProperty('--border-radius', '10px');
  }

  public async selectFolder(folder: Folder) {
    this.folders.forEach(f => {
      f.selected = false;
      this.saveToDisk({ action: 'update', entity: f, dataStore: DataStores.folders });
    });
    folder.selected = true;
    this.notes = await Crossover.get<Note[]>(DataChannel.with(ReadData), <ReadData>{ dataStore: DataStores.notes, filter: { folderId: folder.id } });
    this.selectedFolder = folder;
    this.saveToDisk({ action: 'update', entity: folder, dataStore: DataStores.folders });
  }

  public async saveFolder(folderNameInput: HTMLInputElement, checkedInput: HTMLInputElement) {
    var newFolder = <Folder>{ id: uuid(), name: folderNameInput.value, classified: checkedInput.checked, isDefault: false };
    this.folders.push(newFolder);
    this.selectFolder(this.folders[this.folders.length - 1]);
    this.creteFolderModal.hide();
    checkedInput.checked = false;
    folderNameInput.value = '';
    this.saveToDisk({ action: 'add', entity: newFolder, dataStore: DataStores.folders });
  }

  public createNote() {
    if (this.appConfig.minimized) {
      this.toggleView();
    }
    this.notesList.addNotesModal.show();
  }

  public saveNotesUpdates(ev: NoteEvent) {
    ev.note.folderId = this.selectedFolder.id;
    this.saveToDisk({ action: ev.eventType, entity: ev.note, dataStore: DataStores.notes });
  }

  private saveToDisk(saveModel: GenericData) {
    Crossover.send<GenericData>(DataChannel.with(GenericData), saveModel);
  }

  public deleteFolder(folder: Folder) {
    this.tempDictionary.folderToDelete = folder;
    this.deleteFolderModal.show();
  }

  public confirmDeleteFolder() {
    var index = this.folders.indexOf(this.tempDictionary.folderToDelete);
    var deletedFolder = this.folders.splice(index, 1)[0];
    this.saveToDisk({ action: 'delete', entity: deletedFolder, dataStore: DataStores.folders });
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