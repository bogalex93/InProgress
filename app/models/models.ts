import { NoteActions } from 'app/core/notes-list/note-actions';

export class Folder {
  id?: string;
  name: string;
  isDefault?: boolean;
  selected?: boolean;
  classified?: boolean;
  cryptoKey?: string;  
}

export class Note {
  id?: string;
  folderId?: string;
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

export enum DataStores {
  folders = 'folders',
  notes = 'notes'
}