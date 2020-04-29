"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var crossover_ipc_main_1 = require("../crossover/crossover-ipc.main");
var crossover_channels_1 = require("../crossover/crossover.channels");
var win;
var display;
electron_1.app.allowRendererProcessReuse = true;
electron_1.app.on('ready', createWindow);
function createWindow() {
    display = electron_1.screen.getPrimaryDisplay();
    var width = windowSizes[display.bounds.width] || 300;
    var webPreferences = { nodeIntegration: true };
    var windowOptions = { width: width, height: display.workArea.height, transparent: true, frame: false, skipTaskbar: false, y: 0, x: display.bounds.width - width, webPreferences: webPreferences, show: false };
    var urlOptions = { pathname: path.join(__dirname, "../angular-app/index.html"), protocol: 'file:', slashes: true };
    var appPath = url.format(urlOptions);
    win = new electron_1.BrowserWindow(windowOptions);
    win.loadURL(appPath);
    win.on('closed', function () { return win = null; });
    //win.webContents.openDevTools();
    win.once("ready-to-show", resolveScreenMeta);
}
;
function resolveScreenMeta() {
    var test = "" + crossover_channels_1.InitializationEvents;
    var model = { width: display.bounds.width, height: display.bounds.height };
    crossover_ipc_main_1.CrossoverMain.send(crossover_channels_1.InitializationEvents, win, model);
    win.show();
}
var windowSizes = {
    '3840': 495,
    '2560': 395,
    '1920': 350
};
//# sourceMappingURL=main.js.map