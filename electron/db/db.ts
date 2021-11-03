import "./db.models";
import { configDb, createRsTableSession } from "./db-framework/rs-db.framework";
import { Folder, Note, Tables } from "./db.models";


export const db = {
    connect(dbPath: string) { configDb({ client: 'sqlite3', connection: { filename: dbPath }, useNullAsDefault: true }) },
    get folders() { return createRsTableSession<Folder>(Tables.folders) },
    get notes() { return createRsTableSession<Note>(Tables.notes) },
};

