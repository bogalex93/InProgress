"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
electron_1.app.commandLine.appendSwitch('--enable-experimental-web-platform-features');
var win;
electron_1.app.on('ready', createWindow);
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 1200, height: 600, transparent: true, frame: false, vibrancy: "ultra-dark" });
    win.on('closed', function () { return win = null; });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "../angular-app/index.html"),
        protocol: 'file:',
        slashes: true,
    }));
}
;
//# sourceMappingURL=main.js.map