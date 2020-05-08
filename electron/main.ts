import { app, BrowserWindow, screen, BrowserWindowConstructorOptions, WebPreferences, Display, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { Crossover } from '../crossover/crossover-ipc.main';
import { InitializationChannel } from '../crossover/crossover.channels';
import * as vibrancy from 'electron-acrylic-window';
import { ScreenMeta } from '../crossover/crossover.models';

let win: BrowserWindow;
let display: Display;
app.allowRendererProcessReuse = true;
app.on('ready', createWindow);

function createWindow() {
    display = screen.getPrimaryDisplay();
    let width = windowSizes[display.bounds.width] || 300;
    let webPreferences: WebPreferences = { nodeIntegration: true };
    let windowOptions: BrowserWindowConstructorOptions = {
        width: width,
        height: display.workArea.height,
        transparent: true,
        frame: false,
        skipTaskbar: false,
        y: 0, x: display.bounds.width - width,
        webPreferences: webPreferences,
        show: false,
        minimizable: false,
        resizable:false
    };
    let urlOptions = { pathname: path.join(__dirname, `../angular-app/index.html`), protocol: 'file:', slashes: true };
    win = new BrowserWindow(windowOptions);
    let isDev  = JSON.stringify(process.argv).indexOf('remote-debugging-port') >= 0;
    let appPath = isDev? "http://localhost:4200/" :  url.format(urlOptions);
    win.loadURL(appPath);
    win.on('closed', () => win = null);    
    win.once("ready-to-show", showWindow);    
    vibrancy.setVibrancy(win);
};

function showWindow() {
    // let model = { width: display.bounds.width, height: display.bounds.height };
    // Crossover.send(InitializationChannel.with(ScreenMeta), win, model);
    if (!win.isVisible()) {
        win.show();
    }
}

const windowSizes = {
    '3840': 495,
    '2560': 395,
    '1920': 350
};