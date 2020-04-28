import { app, BrowserWindow, screen, BrowserWindowConstructorOptions, WebPreferences, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;
app.allowRendererProcessReuse = true;
app.on('ready', createWindow);

async function createWindow() {

    let display = screen.getPrimaryDisplay();    
    let width =  800;//windowSizes[display.bounds.width] || 300;
    let webPreferences : WebPreferences = { nodeIntegration: true};
    let windowOptions: BrowserWindowConstructorOptions = { width: width, height: display.workArea.height, transparent: true, frame: false, skipTaskbar: false, y: 0, x: display.bounds.width - width, webPreferences: webPreferences};
    win = new BrowserWindow(windowOptions);
    win.on('closed', () => win = null);
    let urlOptions = { pathname: path.join(__dirname, `../angular-app/index.html`), protocol: 'file:', slashes: true };
    let appPath = url.format(urlOptions);
    win.loadURL(appPath);
    //win.webContents.openDevTools();    
};

const windowSizes = {
    '3840': 495,
    '2560': 395,
    '1920': 350
};