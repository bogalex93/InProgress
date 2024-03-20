"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var os = require("os");
var path = require("path");
//const Toastify = require('toastify-js');
electron_1.contextBridge.exposeInMainWorld('os', {
    homedir: function () { return os.homedir(); },
});
electron_1.contextBridge.exposeInMainWorld('path', {
    join: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return path.join.apply(path, args);
    },
});
electron_1.contextBridge.exposeInMainWorld('electron', {
    send: function (channel, data) { return electron_1.ipcRenderer.send(channel, data); },
    invoke: function (channel, data) { return electron_1.ipcRenderer.invoke(channel, data); },
    on: function (channel, func) { return electron_1.ipcRenderer.on(channel, func); },
    removeListener: function (channel, func) { return electron_1.ipcRenderer.removeListener(channel, func); },
    closeApp: function () { return electron_1.app.exit(); },
});
// contextBridge.exposeInMainWorld('Toastify', {
//   toast: (options) => Toastify(options).showToast(),
// });
//# sourceMappingURL=preload.js.map