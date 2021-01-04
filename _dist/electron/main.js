"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var glasstron = require('glasstron');
var path = require("path");
var url = require("url");
var crossover_ipc_main_1 = require("../crossover/crossover-ipc.main");
var crossover_channels_1 = require("../crossover/crossover.channels");
//import * as vibrancy from 'electron-acrylic-window';
var crossover_models_1 = require("../crossover/crossover.models");
var fs = require("fs");
var Blob = require("cross-blob");
var win;
var display;
var dockedBounds;
var width;
electron_1.app.allowRendererProcessReuse = true;
electron_1.app.commandLine.appendSwitch('enable-transparent-visuals');
electron_1.app.on("ready", function () { return setTimeout(createWindow, process.platform == "linux" ? 1000 : 0); });
function createWindow() {
    onStartup();
    dockedBounds = { width: width, height: display.workArea.height, y: 0, x: display.bounds.width - width };
    var urlOptions = { pathname: path.join(__dirname, "../angular-app/index.html"), protocol: 'file:', slashes: true };
    var isDev = JSON.stringify(process.argv).indexOf('remote-debugging-port') >= 0;
    var appUrl = isDev ? "http://localhost:4200/" : url.format(urlOptions);
    var webPreferences = { nodeIntegration: true };
    var windowOptions = {
        transparent: true,
        frame: false,
        skipTaskbar: false,
        webPreferences: webPreferences,
        minimizable: false,
    };
    win = new glasstron.BrowserWindow(windowOptions);
    win.blurType = "acrylic";
    //              ^~~~~~~
    // Windows 10 1803+; for older versions you
    // might want to use 'blurbehind'
    win.setBlur(true);
    win.setBounds(dockedBounds, true);
    win.loadURL(appUrl);
    //(<BrowserWindow>win).webContents.openDevTools();
    win.on('closed', function () { return onClosed; });
}
;
function onClosed() {
    win = null;
}
function onStartup() {
    display = electron_1.screen.getPrimaryDisplay();
    var windowSizes = { '3840': 495, '2560': 395, '1920': 350 };
    width = windowSizes[display.bounds.width] || 300;
    checkDataDir();
    registerEvents();
}
function registerEvents() {
    var _this = this;
    crossover_ipc_main_1.Crossover.handle(crossover_channels_1.ConfigurationChannel.with(crossover_models_1.DisplayInfo), function (e, m) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, display.bounds];
    }); }); });
    crossover_ipc_main_1.Crossover.listen(crossover_channels_1.DataChannel.with(crossover_models_1.GenericData), function (e, m) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, saveData(m)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); });
    crossover_ipc_main_1.Crossover.handle(crossover_channels_1.DataChannel.with(crossover_models_1.GenericData), function (e, m) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getData(m.storeName)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); });
}
function checkDataDir() {
    fs.opendir('./appdata', function (err, dir) {
        if (err) {
            fs.mkdir('./appdata', function () { });
        }
    });
}
function saveData(genericData) {
    return __awaiter(this, void 0, void 0, function () {
        var dataStr, b, ab, bytesStr, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    dataStr = JSON.stringify(genericData.data);
                    b = new Blob([dataStr], { type: 'text/json' });
                    return [4 /*yield*/, b.arrayBuffer()];
                case 1:
                    ab = _a.sent();
                    bytesStr = JSON.stringify(Array.from(new Uint8Array(ab)));
                    fs.writeFile("./appdata/" + genericData.storeName + ".db", bytesStr, { encoding: "utf-8" }, function () { });
                    alert("saving data");
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    alert(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getData(storeName) {
    try {
        var data = fs.readFileSync("./appdata/" + storeName + ".db");
        var dataStr = data.toString();
        var bufferVal = JSON.parse(dataStr);
        var jsonString = String.fromCharCode.apply(null, new Uint16Array(bufferVal));
        var jsonData = JSON.parse(jsonString);
        return jsonData;
    }
    catch (_a) {
        return null;
    }
}
//# sourceMappingURL=main.js.map