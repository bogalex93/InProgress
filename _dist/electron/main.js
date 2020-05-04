"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var crossover_ipc_main_1 = require("../crossover/crossover-ipc.main");
var crossover_channels_1 = require("../crossover/crossover.channels");
var vibrancy = require("electron-acrylic-window");
var crossover_models_1 = require("../crossover/crossover.models");
var win;
var display;
electron_1.app.allowRendererProcessReuse = true;
electron_1.app.on('ready', createWindow);
function createWindow() {
    display = electron_1.screen.getPrimaryDisplay();
    var width = 1200; //windowSizes[display.bounds.width] || 300;
    var webPreferences = { nodeIntegration: true };
    var windowOptions = { width: width, height: display.workArea.height - 40, transparent: true, frame: false, skipTaskbar: false, y: 20, x: display.bounds.width - (width + 10), webPreferences: webPreferences, show: false, minimizable: false };
    var urlOptions = { pathname: path.join(__dirname, "../angular-app/index.html"), protocol: 'file:', slashes: true };
    var appPath = url.format(urlOptions);
    win = new electron_1.BrowserWindow(windowOptions);
    win.loadURL(appPath);
    win.on('closed', function () { return win = null; });
    //win.webContents.openDevTools();
    win.once("ready-to-show", resolveScreenMeta);
    //win.on("maximize", resolveScreenMeta);
    vibrancy.setVibrancy(win);
}
;
function resolveScreenMeta() {
    var model = { width: display.bounds.width, height: display.bounds.height };
    crossover_ipc_main_1.Crossover.send(crossover_channels_1.InitializationChannel.with(crossover_models_1.ScreenMeta), win, model);
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