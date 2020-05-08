import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UIkit as uikit, ModalEvents, UIkitModalElement } from 'app/shared/types/uikit.types';
import { UIkitComponent } from 'app/shared/custom-decorators';
import { Folder } from 'app/models/models';
const uikit: uikit = (window as any).UIkit;


@Component({ selector: 'app-root', templateUrl: './root.component.html', styleUrls: ['./root.component.scss'] })
export class RootComponent implements AfterViewInit {

  @ViewChild('addNoteModalRef')
  @UIkitComponent(uikit.modal)
  public addNotesModal: UIkitModalElement;

  @ViewChild('createFolderModalRef')
  @UIkitComponent(uikit.modal)
  public creteFolderModal: UIkitModalElement;

  public modalVisible: boolean;
  public folders: Folder[];
  public selectedFolder: Folder;

  public console = console;

  constructor(private elementRef: ElementRef) {
    if (!this.folders)
      this.folders = [{ name: "General", notes: [], isDefault: true }];
    if (!this.selectedFolder)
      this.selectFolder(this.folders[0]);
  }

  ngAfterViewInit(): void {
    uikit.util.on(this.addNotesModal.$el, ModalEvents.show, e => this.modalVisible = true);
    uikit.util.on(this.addNotesModal.$el, ModalEvents.hidden, e => this.modalVisible = false);
    uikit.util.on(this.creteFolderModal.$el, ModalEvents.show, e => this.modalVisible = true);
    uikit.util.on(this.creteFolderModal.$el, ModalEvents.hidden, e => this.modalVisible = false);
    (<HTMLElement>document.body).style.setProperty('--border-radius', '20px');
    (<HTMLElement>this.elementRef.nativeElement).style.setProperty('--border-radius', '20px');
  }

  public selectFolder(folder: Folder) {
    this.folders.forEach(f => f.selected = false);
    folder.selected = true;
    this.selectedFolder = folder;
  }

  public saveFolder(input: HTMLInputElement) {
    this.folders.push({ name: input.value, notes: [] });
    this.creteFolderModal.hide();
    input.value = '';
  }
}

