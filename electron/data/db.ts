import  "./db.models";
import { createRsTableSession } from "./db-framework/rs-db.framework";
import { Folder, Tables, Note } from "./db.models";


export const db = {
    get folders() { return createRsTableSession<Folder>(Tables.folders) },
    get notes() { return createRsTableSession<Note>(Tables.notes) },
};

