import { createRsTableSession } from "./db-framework/rs-db.framework";
import { Folder } from "./db.models";


export enum Tables {
    folders = 'folders',
    notes = 'notes'
}

export const db = {
    get folders() { return createRsTableSession<Folder>(Tables.folders) },
    get notes() { return createRsTableSession<Folder>(Tables.notes) },
};

