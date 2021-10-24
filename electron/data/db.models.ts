import { Tables } from "./db";
import { jsonProp, linkTable } from "./db-framework/rs-db.model-composer";

 
@linkTable(Tables.folders)
export class Folder {
    id: string;
    name: string;
    @jsonProp()
    notes: string;
    isDefault?: boolean;
    selected?: boolean;
    classified?: boolean;
  }
  
  @linkTable(Tables.notes)
  export class Note {
    id: string;
    title?: string;
    lines?: string;
    date?: Date;
    target?: Date;
    state?: string;
  }