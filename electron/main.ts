import { app, BrowserWindow, screen, BrowserWindowConstructorOptions, WebPreferences, Display, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { Crossover } from '../crossover/crossover-ipc.main';
import { ConfigurationChannel, DataChannel } from '../crossover/crossover.channels';
import * as vibrancy from 'electron-acrylic-window';
import { DisplayInfo, AppConfig, GenericData } from '../crossover/crossover.models';
import * as fs from 'fs';
import * as Blob from 'cross-blob';

let win: BrowserWindow;
let display: Display;
let dockedBounds;
let width;
app.allowRendererProcessReuse = true;

app.on('ready', createWindow);

function createWindow() {
  onStartup();
  let webPreferences: WebPreferences = { nodeIntegration: true };
  dockedBounds = { width: width, height: display.workArea.height, y: 0, x: display.bounds.width - width };
  let windowOptions: BrowserWindowConstructorOptions = {
    transparent: true,
    frame: false,
    skipTaskbar: false,
    webPreferences: webPreferences,
    show: false,
    minimizable: false
  };
  let urlOptions = { pathname: path.join(__dirname, `../angular-app/index.html`), protocol: 'file:', slashes: true };
  win = new BrowserWindow(windowOptions);
  let isDev = JSON.stringify(process.argv).indexOf('remote-debugging-port') >= 0;
  let appPath = isDev ? "http://localhost:4200/" : url.format(urlOptions);
  var appUrl = url.format(urlOptions);
  win.loadURL(appUrl);
  win.on('closed', () => win = null);
  win.once("ready-to-show", showWindow);
  vibrancy.setVibrancy(win);
};


function showWindow() {
  win.setBounds(dockedBounds, true);
   win.webContents.openDevTools();
  if (!win.isVisible()) {
    win.show();
  }
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
  Crossover.handle<GenericData>(DataChannel.with(GenericData), async (e, m) => await getData(m.storeName));
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
    var dataStr = JSON.stringify(genericData.data);
    var b = new Blob([dataStr], { type: 'text/json' });
    var ab = await b.arrayBuffer();
    var bytesStr = JSON.stringify(Array.from(new Uint8Array(ab)));
    fs.writeFile(`./appdata/${genericData.storeName}.db`, bytesStr, { encoding: "utf-8" }, () => { });
  }
  catch (err) {
    alert(err);
  }
}

function getData(storeName: string) {
  try {
    var data = fs.readFileSync(`./appdata/${storeName}.db`);
    var dataStr = data.toString();
    var bufferVal = JSON.parse(dataStr);
    var jsonString = String.fromCharCode.apply(null, new Uint16Array(bufferVal));
    var jsonData = JSON.parse(jsonString);
    return jsonData;
  }
  catch {
    return null;
  }
}
