import { app, BrowserWindow, screen, BrowserWindowConstructorOptions, WebPreferences, Display, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { CrossoverMain } from '../crossover/crossover-ipc.main';
import { InitializationEvents } from '../crossover/crossover.channels';
import { ScreenMeta } from '../crossover/crossover.models';

let win: BrowserWindow;
let display: Display;
app.allowRendererProcessReuse = true;
app.on('ready', createWindow);

function createWindow() {
    display = screen.getPrimaryDisplay();
    let width = windowSizes[display.bounds.width] || 300;
    let webPreferences: WebPreferences = { nodeIntegration: true };
    let windowOptions: BrowserWindowConstructorOptions = { width: width, height: display.workArea.height, transparent: true, frame: false, skipTaskbar: false, y: 0, x: display.bounds.width - width, webPreferences: webPreferences, show: false };
    let urlOptions = { pathname: path.join(__dirname, `../angular-app/index.html`), protocol: 'file:', slashes: true };
    let appPath = url.format(urlOptions);
    win = new BrowserWindow(windowOptions);
    win.loadURL(appPath);
    win.on('closed', () => win = null);
    //win.webContents.openDevTools();
    win.once("ready-to-show", resolveScreenMeta);
};

function resolveScreenMeta() {
    var test  = `${InitializationEvents}`;
    let model = { width: display.bounds.width, height: display.bounds.height };
    CrossoverMain.send(InitializationEvents, win, model);
    win.show();
}

const windowSizes = {
    '3840': 495,
    '2560': 395,
    '1920': 350
};