"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var crossover_channels_1 = require("./crossover.channels");
var CrossoverMain = /** @class */ (function () {
    function CrossoverMain() {
    }
    CrossoverMain.listen = function (channel, listener) {
        var eventName = channel instanceof crossover_channels_1.CrossoverChannel ? channel.eventName : new channel().constructor.name;
        electron_1.ipcMain.on(eventName, listener);
    };
    CrossoverMain.handle = function (channel, listener) {
        var eventName = channel instanceof crossover_channels_1.CrossoverChannel ? channel.eventName : new channel().constructor.name;
        electron_1.ipcMain.handle(eventName, listener);
    };
    CrossoverMain.send = function (channel, window, model) {
        var eventName = channel instanceof crossover_channels_1.CrossoverChannel ? channel.eventName : channel.channelName;
        window.webContents.send(eventName, model);
    };
    return CrossoverMain;
}());
exports.CrossoverMain = CrossoverMain;
//# sourceMappingURL=crossover-ipc.main.js.map