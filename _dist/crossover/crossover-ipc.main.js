"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var CrossoverMain = /** @class */ (function () {
    function CrossoverMain() {
    }
    CrossoverMain.listen = function (channel, listener) {
        var channelName = new channel().constructor.name;
        electron_1.ipcMain.on(channelName, listener);
    };
    CrossoverMain.handle = function (channel, listener) {
        var channelName = new channel().constructor.name;
        electron_1.ipcMain.handle(channelName, listener);
    };
    CrossoverMain.send = function (channel, window, model) {
        var channelName = new channel().constructor.name;
        window.webContents.send(channelName, model);
    };
    return CrossoverMain;
}());
exports.CrossoverMain = CrossoverMain;
//# sourceMappingURL=crossover-ipc.main.js.map