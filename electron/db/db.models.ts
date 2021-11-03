import { prop, linkTable } from "./db-framework/rs-db.model-composer";

export enum Tables {
  folders = 'Folders',
  notes = 'Notes'
}

@linkTable(Tables.folders)
export class Folder {
  id: string;
  name: string;
  @prop.json()
  notes: string;
  @prop.boolean()
  isDefault?: boolean;
  @prop.boolean()
  selected?: boolean;
  @prop.boolean()
  classified?: boolean;
}

@linkTable(Tables.notes)
export class Note {
  id: string;
  folderId?: string;
  title?: string;
  @prop.json()
  lines?: string;
  date?: Date;
  target?: Date;
  state?: string;
}