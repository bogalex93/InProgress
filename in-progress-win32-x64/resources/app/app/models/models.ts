import { NoteActions } from 'app/root/note-actions';

export class Folder {
  name: string;
  notes: Note[];
  isDefault?: boolean;
  selected?: boolean;
}

export class Note {
  title?: string;
  lines?: NoteLine[];
  content?: string;
  date?: Date;
  target?: Date;
  state?: NoteStates;

  allStates?: typeof NoteStates;
  actions?: NoteActions;
}

export interface NoteLine {
  content?: string;
  done?: boolean;
  date?: Date;
  state?: NoteStates;
}


export enum NoteStates {
  completed = 'completed',
  inProgress = 'inProgress',
  canceled = 'canceled',
  important = 'important',
  neutral = 'neutral'
}

