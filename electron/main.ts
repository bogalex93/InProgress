import { app, BrowserWindow, screen, BrowserWindowConstructorOptions, WebPreferences, Display, ipcMain } from 'electron';
const glasstron = require('glasstron');
import * as path from 'path';
import * as url from 'url';
import { Crossover } from '../crossover/crossover-ipc.main';
import { ConfigurationChannel, DataChannel } from '../crossover/crossover.channels';
//import * as vibrancy from 'electron-acrylic-window';
import { DisplayInfo, AppConfig, GenericData, ReadData } from '../crossover/crossover.models';
import * as fs from 'fs';
import * as Blob from 'cross-blob';
import { v4 as uuid } from 'uuid';
import { db } from './data/db';
import { Tables } from 'data/db.models';

let win: any;
let display: Display;
let dockedBounds;
let width;
app.allowRendererProcessReuse = true;
app.commandLine.appendSwitch('enable-transparent-visuals');

app.on("ready", () => setTimeout(createWindow, process.platform == "linux" ? 1000 : 0));

function createWindow() {
  onStartup();
  dockedBounds = { width: width, height: display.workArea.height, y: display.bounds.y, x: display.bounds.x + display.bounds.width - width };
  let urlOptions = { pathname: path.join(__dirname, `../angular-app/index.html`), protocol: 'file:', slashes: true };
  let isDev = JSON.stringify(process.argv).indexOf('remote-debugging-port') >= 0;
  let appUrl = isDev ? "http://localhost:4200/" : url.format(urlOptions);

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
  //(<BrowserWindow>win).webContents.openDevTools();
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
  Crossover.listen<GenericData>(DataChannel.with(GenericData), (e, m) => saveData(m));
  Crossover.handle<GenericData>(DataChannel.with(ReadData), async (e, m) => await getData(m));
}

function checkDataDir() {
  fs.opendir('./appdata', (err, dir) => {
    if (err) {
      fs.mkdir('./appdata', () => { })
    }
  });
}

async function saveData(genericData: GenericData) {
  try {
    var res;
    if (genericData.action == 'add') {
      res = await db[genericData.dataStore as Tables].addEntity(genericData.entity);
    }
    if (genericData.action == 'update') {
      res = await db[genericData.dataStore as Tables].updateEntity(genericData.entity);
    }
    if (genericData.action == 'delete') {
      res = await db[genericData.dataStore as Tables].removeEntity(genericData.entity.id);
    }
  }
  catch (err) {
    var test = err;
  }
}

async function getData(readModel: ReadData) {
  var data = await db[readModel.dataStore as Tables].getData(readModel.filter);
  return data;
}

