import { app, dialog } from 'electron';
import * as path from 'path';
import { db } from './db/db';
import { environment } from './environment';
import { mainWindow } from './core/main.window';


environment.workspaceDir = __dirname;
const dbPath = path.join(__dirname, '../appdata/db.db3').replace('\\app.asar\\prod_build', '');
//dialog.showErrorBox('path', dbPath)

db.connect(dbPath);


app.on("ready", () => setTimeout(() => mainWindow.createWindow(), process.platform == "linux" ? 1000 : 0));


