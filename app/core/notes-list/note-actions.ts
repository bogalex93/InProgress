import { Note, NoteLine, NoteStates } from 'app/models/models';

export class NoteActions {

  constructor(private note: Note, private onAction: () => void) {
  }

  public completeLine(line: NoteLine) {
    line.state = NoteStates.completed;
    this.onAction();
  }

  public cancelLine(line: NoteLine) {
    line.state = NoteStates.canceled;
    this.onAction();
  }

  public inProgressLine(line: NoteLine) {
    line.state = NoteStates.inProgress;
    this.onAction();
  }

  public createNewLine() {
    this.note.lines.push({});
    this.note.state = NoteStates.neutral;
    this.onAction();
  };


}
