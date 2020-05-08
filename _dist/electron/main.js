"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var vibrancy = require("electron-acrylic-window");
var win;
var display;
electron_1.app.allowRendererProcessReuse = true;
electron_1.app.on('ready', createWindow);
function createWindow() {
    display = electron_1.screen.getPrimaryDisplay();
    var width = windowSizes[display.bounds.width] || 300;
    var webPreferences = { nodeIntegration: true };
    var windowOptions = {
        width: width,
        height: display.workArea.height,
        transparent: true,
        frame: false,
        skipTaskbar: false,
        y: 0, x: display.bounds.width - width,
        webPreferences: webPreferences,
        show: false,
        minimizable: false,
        resizable: false
    };
    var urlOptions = { pathname: path.join(__dirname, "../angular-app/index.html"), protocol: 'file:', slashes: true };
    win = new electron_1.BrowserWindow(windowOptions);
    var isDev = JSON.stringify(process.argv).indexOf('remote-debugging-port') >= 0;
    var appPath = isDev ? "http://localhost:4200/" : url.format(urlOptions);
    win.loadURL(appPath);
    win.on('closed', function () { return win = null; });
    win.once("ready-to-show", showWindow);
    vibrancy.setVibrancy(win);
}
;
function showWindow() {
    // let model = { width: display.bounds.width, height: display.bounds.height };
    // Crossover.send(InitializationChannel.with(ScreenMeta), win, model);
    if (!win.isVisible()) {
        win.show();
    }
}
var windowSizes = {
    '3840': 495,
    '2560': 395,
    '1920': 350
};
//# sourceMappingURL=main.js.map