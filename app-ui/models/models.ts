import { NoteActions } from 'root/note-actions';

export class Folder {
  id: string;
  name: string;
  notes: Note[];
  isDefault?: boolean;
  selected?: boolean;
  classified?: boolean;
}

export class Note {
  id: string;
  title?: string;
  lines?: NoteLine[];
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

