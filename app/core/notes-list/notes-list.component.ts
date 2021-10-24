import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Note, NoteStates } from 'app/models/models';
import { NoteActions } from 'app/core/notes-list/note-actions';
import * as _ from 'lodash';
import * as lodash from 'lodash';
import { UIkitComponent } from 'app/shared/custom-decorators';
import { ModalEvents, UIkit, UIkitModalElement } from 'app/shared/types/uikit.types';
const uikit: UIkit = (window as any).UIkit;

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit, AfterViewInit {

  @ViewChild('addNoteModalRef')
  @UIkitComponent(uikit.modal)
  public addNotesModal: UIkitModalElement;

  @Output() notesChange = new EventEmitter();
  @Output() noteUpdated = new EventEmitter();
  @Output() noteAdded = new EventEmitter();
  @Output() noteDeleted = new EventEmitter();
  @Input() notes: Note[];

  private _newNote : Note;
  public get newNote() {  return this._newNote || (this._newNote = { lines: [{}] }); }
  
  public lodash = lodash;
  public noteStates = NoteStates;  
  private tempDictionary : {};

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
    this.notes.push(this.newNote);
    this.addNotesModal.hide();
    this.noteAdded.emit(this.newNote);
    //alert(crypto.AES.encrypt(JSON.stringify(this.newNote), 'key'));
  }

  public async completeNote(note: Note) {
    note.lines = note.lines.filter(l => !!l.content);
    note.lines.filter(l => l.state != NoteStates.canceled).forEach(l => l.state = NoteStates.completed);
    note.state = NoteStates.completed;
    this.notesChange.emit(this.notes);
  }

  public markNote(note: Note) {
    note.state = note.state === NoteStates.important ? NoteStates.neutral : NoteStates.important;
    this.notesChange.emit(this.notes);
  }

  public initNote(noteEl: any, note: Note) {
    noteEl.allStates = NoteStates;
    noteEl.actions = new NoteActions(note, () => this.notesChange.emit(this.notes));
  }

  public removeNote(note: Note) {
    var index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
    this.notesChange.emit(this.notes);
  }

  public adaptHeight(textEl: HTMLTextAreaElement){       
    var parent = <HTMLElement>textEl.parentNode;        
    parent.style.height = textEl.scrollHeight + 'px';    
  }
}
