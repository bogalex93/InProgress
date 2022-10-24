import { Component, ViewChild, AfterViewInit, ElementRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { UIkit, ModalEvents, UIkitModalElement, UIkitModalOptions } from 'app/shared/types/uikit.types';
import { UIkitComponent } from 'app/shared/custom-decorators';
import { DataStores, Folder, Note, NoteStates } from 'app/models/models';
import { Crossover } from 'crossover/crossover-ipc.renderer';
import { ConfigurationChannel, DataChannel } from 'crossover/crossover.channels';
import { AppConfig, GraphicProperties, GenericData, ReadData } from 'crossover/crossover.models';
import * as lodash from 'lodash';
import * as _ from 'lodash';
import * as crypto from "crypto-js";
import { NoteEvent, NotesListComponent } from 'app/core/notes-list/notes-list.component';
import { v4 as uuid } from 'uuid';
import { enc } from 'crypto-js';
const uikit: UIkit = (window as any).UIkit;

@Component({ selector: 'app-root', templateUrl: './root.component.html', styleUrls: ['./root.component.scss'] })
export class RootComponent implements OnInit, AfterViewInit {

  public lodash = lodash;

  @ViewChild('contentContainer')
  public contentContainerRef: ElementRef;

  private get contentContainer(): HTMLElement { return this.contentContainerRef.nativeElement }

  @ViewChild('createFolderModalRef')
  @UIkitComponent(uikit.modal)
  public creteFolderModal: UIkitModalElement;

  @ViewChild('deleteFolderModalRef')
  @UIkitComponent(uikit.modal)
  public deleteFolderModal: UIkitModalElement;

  @ViewChild('cryptoFolderModalRef')
  @UIkitComponent(uikit.modal)
  public cryptoFolderModal: UIkitModalElement;

  @ViewChild('notesList') notesList: NotesListComponent;

  public modalVisible: boolean;
  private defaultFolder = <Folder>{ id: uuid(), name: 'Generic', selected: true, isDefault: true, classified: false };
  public folders: Folder[] = [];
  public notes: Note[] = [];
  public selectedFolder: Folder = this.defaultFolder;

  public console = console;

  public appConfig: AppConfig = {};
  public graphicProperties: GraphicProperties;
  public display: { id: string, size: Electron.Size, bounds: Electron.Rectangle, workArea: Electron.Rectangle };
  public electronWindow: Electron.BrowserWindow;
  public tempDictionary: { folderToDelete?: Folder, positionInterval?: any } = {};
  public aperenceTypes = AperenceTypes;

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
      console.log(this.electronWindow.getBounds());
      this.graphicProperties = await Crossover.get(ConfigurationChannel.with(GraphicProperties));
      var folders = await Crossover.get<Folder[]>(DataChannel.with(ReadData), <ReadData>{ dataStore: DataStores.folders });
      if (folders.length == 0) {
        this.folders.push(this.defaultFolder);
        this.saveToDisk({ action: 'add', entity: this.defaultFolder, dataStore: DataStores.folders });
      }
      else {
        this.folders = folders;
      }

    }

    this.selectFolder(this.folders.find(f => f.selected));
  }

  async ngAfterViewInit(): Promise<void> {
    (<UIkitModalElement[]>[this.notesList.addNotesModal, this.creteFolderModal, this.deleteFolderModal, this.cryptoFolderModal]).forEach(m => {
      uikit.util.on(m.$el, ModalEvents.show, e => this.modalVisible = true);
      uikit.util.on(m.$el, ModalEvents.hidden, e => this.modalVisible = false);
    });
    (<HTMLElement>document.body).style.setProperty('--border-radius', '10px');
    (<HTMLElement>this.elementRef.nativeElement).style.setProperty('--border-radius', '10px');

    const menuElement = document.getElementById('menu');
    document.onmouseleave = e => this.contentContainer.style.left = this.contentContainer.clientWidth + 10 + 'px';
    menuElement.onmouseenter = e => this.contentContainer.style.left = '0';
  }

  public async selectFolder(folder: Folder) {
    this.folders.forEach(f => {
      f.selected = false;
      this.saveToDisk({ action: 'update', entity: f, dataStore: DataStores.folders });
    });
    folder.selected = true;
    this.selectedFolder = folder;
    this.saveToDisk({ action: 'update', entity: folder, dataStore: DataStores.folders });
    if (folder.classified) {
      this.cryptoFolderModal.show();
    }
    else {
      this.notes = await Crossover.get<Note[]>(DataChannel.with(ReadData), <ReadData>{ dataStore: DataStores.notes, filter: { folderId: folder.id } });
    }
  }

  public async decryptFolder(keyInput?: HTMLInputElement) {
    if (keyInput) {
      this.selectedFolder.cryptoKey = keyInput.value;
      keyInput.value = '';
    }
    this.notes = await Crossover.get<Note[]>(DataChannel.with(ReadData), <ReadData>{ dataStore: DataStores.notes, filter: { folderId: this.selectedFolder.id } });
    this.notes.forEach(n => this.decryptNote(n));
    this.cryptoFolderModal.hide();
  }

  public async saveFolder(folderNameInput: HTMLInputElement, checkedInput: HTMLInputElement, pwdInput: HTMLInputElement) {
    var newFolder = <Folder>{ id: uuid(), name: folderNameInput.value, classified: checkedInput.checked, isDefault: false };
    this.saveToDisk({ action: 'add', entity: newFolder, dataStore: DataStores.folders });
    newFolder.cryptoKey = pwdInput.value;
    this.folders.push(newFolder);
    this.selectFolder(this.folders[this.folders.length - 1]);
    this.creteFolderModal.hide();
    checkedInput.checked = false;
    folderNameInput.value = '';
  }

  public createNote() {
    this.notesList.addNotesModal.show();
  }

  public saveNotesUpdates(ev: NoteEvent) {

    var note = { ..._.cloneDeep(ev.note), folderId: this.selectedFolder.id };
    if (this.selectedFolder.classified) {
      this.encryptNote(note);
    }
    this.saveToDisk({ action: ev.eventType, entity: note, dataStore: DataStores.notes });
  }

  private encryptNote(note: Note) {
    note.title = crypto.AES.encrypt(note.title, this.selectedFolder.cryptoKey).toString();
    note.lines.forEach(l => l.content = crypto.AES.encrypt(l.content, this.selectedFolder.cryptoKey).toString());
  }

  private decryptNote(note: Note) {
    note.title = crypto.AES.decrypt(note.title, this.selectedFolder.cryptoKey).toString(enc.Utf8);
    note.lines.forEach(l => l.content = crypto.AES.decrypt(l.content, this.selectedFolder.cryptoKey).toString(enc.Utf8));
  }

  private saveToDisk(saveModel: GenericData) {
    Crossover.send<GenericData>(DataChannel.with(GenericData), saveModel);
  }

  public deleteFolder(folder: Folder) {
    this.tempDictionary.folderToDelete = folder;
    this.deleteFolderModal.show();
  }

  public confirmDeleteFolder() {
    if (this.tempDictionary.folderToDelete == this.selectedFolder) {
      this.selectFolder(this.folders[0]);
    }
    var index = this.folders.indexOf(this.tempDictionary.folderToDelete);
    var deletedFolder = this.folders.splice(index, 1)[0];
    this.saveToDisk({ action: 'delete', entity: deletedFolder, dataStore: DataStores.folders });
    this.tempDictionary.folderToDelete = null;
    this.deleteFolderModal.hide();
  }

  public changeWindowSize(value) {
    this.graphicProperties.appBounds.width += value;
    const workArea = this.graphicProperties.display.workArea;
    this.graphicProperties.appBounds.x = (workArea.x + workArea.width - this.graphicProperties.appBounds.width) - 10
    this.electronWindow.setBounds(this.graphicProperties.appBounds);
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
