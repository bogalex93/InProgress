import { Note, NoteLine, NoteStates } from 'app/models/models';

export class NoteActions {
  private note: Note;

  constructor(note: Note) {
    this.note = note;
  }

  public completeLine(line: NoteLine) {
    line.state = NoteStates.completed;
  }

  public cancelLine(line: NoteLine) {
    line.state = NoteStates.canceled;
  }

  public inProgressLine(line: NoteLine) {
    line.state = NoteStates.inProgress;
  }

  public createNewLine() {
    this.note.lines.push({});
    this.note.state = NoteStates.neutral;
  };


}
