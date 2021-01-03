import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note, NoteStates } from 'app/models/models';
import { NoteActions } from 'app/root/note-actions';
import * as _ from 'lodash';
import * as lodash from 'lodash';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  @Output() notesChange = new EventEmitter();
  @Input() notes: Note[];
  public lodash = lodash;
  public noteStates = NoteStates;  
  private tempDictionary : {};

  constructor() { }

  ngOnInit(): void {
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
