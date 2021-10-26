import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Note, NoteStates } from 'app/models/models';
import { NoteActions } from 'app/core/notes-list/note-actions';
import * as _ from 'lodash';
import * as lodash from 'lodash';
import { UIkitComponent } from 'app/shared/custom-decorators';
import { ModalEvents, UIkit, UIkitModalElement } from 'app/shared/types/uikit.types';
const uikit: UIkit = (window as any).UIkit;
export type NoteEvent = { eventType: NoteEvents, note: Note };
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})

export class NotesListComponent implements OnInit, AfterViewInit {

  @ViewChild('addNoteModalRef')
  @UIkitComponent(uikit.modal)
  public addNotesModal: UIkitModalElement;
  @Output() noteUpdates = new EventEmitter<NoteEvent>();
  @Input() notes: Note[];

  private _newNote: Note;
  public get newNote() { return this._newNote || (this._newNote = { lines: [{}] }); }

  public lodash = lodash;
  public noteStates = NoteStates;

  constructor() { }
  ngAfterViewInit(): void {
    // uikit.util.on(this.addNotesModal.$el, ModalEvents.show, e => this.modalVisible = true);
    // uikit.util.on(this.addNotesModal.$el, ModalEvents.hidden, e => this.modalVisible = false);
    this.addNotesModal.$el.style.right = '46px';
  }

  ngOnInit(): void {
  }

  public saveNote() {
    this.newNote.date = new Date(Date.now());
    var note = this.newNote;
    note.id = uuid();
    this.notes.push(note);
    this._newNote = undefined;
    this.addNotesModal.hide();
    this.noteUpdates.emit({ eventType: NoteEvents.added, note: note });
    //alert(crypto.AES.encrypt(JSON.stringify(this.newNote), 'key'));
  }

  public async completeNote(note: Note) {
    note.lines = note.lines.filter(l => !!l.content);
    note.lines.filter(l => l.state != NoteStates.canceled).forEach(l => l.state = NoteStates.completed);
    note.state = NoteStates.completed;
    this.noteUpdates.emit({ eventType: NoteEvents.updated, note: note });
  }

  public emitUpdate(note: Note){
    this.noteUpdates.emit({ eventType: NoteEvents.updated, note: note });
  }

  public markNote(note: Note) {
    note.state = note.state === NoteStates.important ? NoteStates.neutral : NoteStates.important;
    this.noteUpdates.emit({ eventType: NoteEvents.updated, note: note });
  }

  public initNote(noteEl: any, note: Note) {
    noteEl.allStates = NoteStates;
    noteEl.actions = new NoteActions(note, () => this.noteUpdates.emit({ eventType: NoteEvents.updated, note: note }));
  }

  public removeNote(note: Note) {
    var index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
    this.noteUpdates.emit({ eventType: NoteEvents.removed, note: note })
  }

  public adaptHeight(textEl: HTMLTextAreaElement) {
    var parent = <HTMLElement>textEl.parentNode;
    parent.style.height = textEl.scrollHeight + 'px';
  }
}

export enum NoteEvents {
  added = 'add',
  updated = 'update',
  removed = 'delete'
}