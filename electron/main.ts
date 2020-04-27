import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

app.commandLine.appendSwitch('--enable-experimental-web-platform-features');

let win: BrowserWindow;

app.on('ready', createWindow);

function createWindow() {
    win = new BrowserWindow({ width: 1200, height: 600, transparent: true, frame: false, vibrancy: "ultra-dark" });
    win.on('closed', () => win = null);
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `../angular-app/index.html`),
            protocol: 'file:',
            slashes: true,
        })
    );
};

