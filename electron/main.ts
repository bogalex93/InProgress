import { app } from 'electron';
import * as path from 'path';
import { db } from './db/db';
import { environment } from './environment';
import { mainWindow } from './core/main.window';

const baseDir = path.join(__dirname, '../');
environment.workspaceDir = baseDir;
const dbPath = path.join(baseDir, '/appdata/db.db3').replace('\\app.asar\\prod_build', '');
db.connect(dbPath);

app.allowRendererProcessReuse = true;
app.commandLine.appendSwitch('enable-transparent-visuals');

app.on("ready", () => setTimeout(() => mainWindow.createWindow(), process.platform == "linux" ? 1000 : 0));


