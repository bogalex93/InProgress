"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crossover = void 0;
var electron_1 = require("electron");
var crossover_framework_1 = require("./crossover-framework");
var Crossover = /** @class */ (function () {
    function Crossover() {
    }
    Crossover.listen = function (channel, listener) {
        var eventName = channel instanceof crossover_framework_1.CrossoverChannel ? channel.eventName : channel.channelName;
        electron_1.ipcMain.on(eventName, listener);
    };
    Crossover.handle = function (channel, listener) {
        var eventName = channel instanceof crossover_framework_1.CrossoverChannel ? channel.eventName : channel.channelName;
        electron_1.ipcMain.handle(eventName, listener);
    };
    Crossover.send = function (channel, window, model) {
        var eventName = channel instanceof crossover_framework_1.CrossoverChannel ? channel.eventName : channel.channelName;
        window.webContents.send(eventName, model);
    };
    return Crossover;
}());
exports.Crossover = Crossover;
//# sourceMappingURL=crossover-ipc.main.js.map