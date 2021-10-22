import { app, BrowserWindow, screen, BrowserWindowConstructorOptions, WebPreferences, Display, ipcMain } from 'electron';
const glasstron = require('glasstron');
import * as path from 'path';
import * as url from 'url';
import { Crossover } from '../crossover/crossover-ipc.main';
import { ConfigurationChannel, DataChannel } from '../crossover/crossover.channels';
import { DisplayInfo, AppConfig, GenericData } from '../crossover/crossover.models';
import * as fs from 'fs';
import { db } from 'data/db';
require('@electron/remote/main').initialize()

let win: any;
let display: Display;
let dockedBounds;
let width;
app.commandLine.appendSwitch('enable-transparent-visuals');

app.on("ready", () => setTimeout(createWindow, process.platform == "linux" ? 1000 : 0));

function createWindow() {
  onStartup();
  dockedBounds = { width: width, height: display.workArea.height, y: display.bounds.y, x: display.bounds.x + display.bounds.width - width };
  let urlOptions = { pathname: path.join(__dirname, `../app-ui/index.html`), protocol: 'file:', slashes: true };
  let isDev = JSON.stringify(process.argv).indexOf('remote-debugging-port') >= 0;
  let appUrl = isDev ? "http://localhost:1110/" : url.format(urlOptions);

  let webPreferences: WebPreferences = { nodeIntegration: true };
  var iconPath = path.join(__dirname, `assets/in-progress.png`);
  let windowOptions: BrowserWindowConstructorOptions = {
    transparent: true,
    frame: false,
    skipTaskbar: false,
    webPreferences: webPreferences,
    minimizable: false,
  };
  win = new glasstron.BrowserWindow(windowOptions);
  win.blurType = "blurbehind";
  //              ^~~~~~~
  // Windows 10 1803+; for older versions you
  // might want to use 'blurbehind'
  win.setBlur(true);
  win.setBounds(dockedBounds, true);


  win.loadURL(appUrl);
   (<BrowserWindow>win).webContents.openDevTools();
  win.on('closed', () => onClosed);
};



function onClosed() {
  win = null;
}

function onStartup() {
  display = screen.getPrimaryDisplay();
  const windowSizes = { '3840': 495, '2560': 395, '1920': 350 };
  width = windowSizes[display.bounds.width] || 300;
  checkDataDir();
  registerEvents();
}

function registerEvents() {
  Crossover.handle<DisplayInfo>(ConfigurationChannel.with(DisplayInfo), async (e, m) => display.bounds);
  Crossover.listen<GenericData>(DataChannel.with(GenericData), async (e, m) => await saveData(m));
  //Crossover.handle<GenericData>(DataChannel.with(GenericData), async (e, m) => await getData(m.storeName));
}

function checkDataDir() {
  fs.readdir('./appdata', (err, dir) => {
    if (err) {
      fs.mkdir('./appdata', () => { })
    }
  });
}

async function saveData(genericData: GenericData) {
  try {
    // var dataStr = JSON.stringify(genericData.data);
    // var b = new Blob([dataStr], { type: 'text/json' });
    // var ab = await b.arrayBuffer();
    // var bytesStr = JSON.stringify(Array.from(new Uint8Array(ab)));
    // fs.writeFile(`./appdata/${genericData.storeName}.db`, bytesStr, { encoding: "utf-8" }, () => { });
    // alert("saving data");


  }
  catch (err) {
    alert(err);
  }
}

function getData(storeName: string) {
  try {
    return {};
  }
  catch {
    return null;
  }
}
