import { screen, BrowserWindowConstructorOptions, WebPreferences, Display, BrowserWindow, dialog } from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';
import { DataHandler } from './data-handler';
import { Crossover } from '../../crossover/crossover-ipc.main';
import { ConfigurationChannel, DataChannel } from '../../crossover/crossover.channels';
import { GenericData, GraphicProperties, ReadData } from '../../crossover/crossover.models';
import { environment } from '../environment';

export class MainWindow {
  public win: BrowserWindow;
  public graphicProperties: GraphicProperties;
  createWindow() {
    this.onStartup();

    let urlOptions = { pathname: path.join(environment.workspaceDir, `../angular-app/index.html`), protocol: 'file:', slashes: true };
    let isDev = JSON.stringify(process.argv).indexOf('remote-debugging-port') >= 0;
    let appUrl = isDev ? "http://localhost:4200/" : url.format(urlOptions);

    var iconPath = path.join(environment.workspaceDir, `../assets/in-progress.png`);
    const preloadPath = path.join(environment.workspaceDir, '../assets/preload.js');
    //dialog.showMessageBox(this.win, { message: preloadPath, title: 'Preload Path', type: 'info' });
    let windowOptions: BrowserWindowConstructorOptions = {
      transparent: true,
      frame: false,
      skipTaskbar: false,
      minimizable: true,
      webPreferences: { nodeIntegration: true, contextIsolation: true, preload: preloadPath },
      titleBarStyle: "hidden",
      backgroundMaterial: "none",
      icon: iconPath,
      ...this.graphicProperties.appBounds,
      backgroundColor: '#00000000'

    };
    this.win = new BrowserWindow(windowOptions);
    this.win.loadURL(appUrl);
    this.win.on('focus', () => this.win.setBackgroundColor('#00000000'))
    this.win.on('blur', () => this.win.setBackgroundColor('#00000000'))
    this.win.show();
    this.win.setBackgroundColor('#00000000');
    this.win.focus();
    this.win.webContents.openDevTools();

    this.win.on('closed', () => this.onClosed());
  };

  onStartup() {

    const { id, size, workArea, bounds } = screen.getPrimaryDisplay();
    const defaultSizes = { '3840': 600, '2560': 440, '1920': 320 };
    const appWidth = defaultSizes[bounds.width] || 300;
    const appHeight = workArea.height - 40;
    const positionY = workArea.y + 20;
    const positionX = (workArea.x + bounds.width - appWidth) - 10;
    const appBounds = { width: appWidth, height: appHeight, y: positionY, x: positionX };
    this.graphicProperties = {
      display: { id, size, workArea, bounds },
      defaultSizes: defaultSizes,
      appBounds: appBounds
    };

    this.checkDataDir();
    this.registerEvents();
  }

  onClosed() {
    this.win = null;
  }

  registerEvents() {
    const dataHandler = new DataHandler();
    Crossover.handle<GraphicProperties>(ConfigurationChannel.with(GraphicProperties), async (e, m) => this.graphicProperties);
    Crossover.listen<GenericData>(DataChannel.with(GenericData), (e, m) => dataHandler.saveData(m));
    Crossover.handle<GenericData>(DataChannel.with(ReadData), async (e, m) => {
      dialog.showMessageBox(this.win, { message: 'Data Requested', title: 'Data Request', type: 'info' });
      return await dataHandler.getData(m)
    });
  }

  checkDataDir() {
    const dataPath = path.join(environment.workspaceDir, '../appdata').replace('\\app.asar\\prod_build', '');
    //dialog.showMessageBox(this.win, { message: dataPath, title: 'Data Directory', type: 'info' });
    fs.opendir(dataPath, (err, dir) => {
      if (err) {
        fs.mkdir(dataPath, () => dialog.showMessageBox(this.win, { message: 'Data directory created', title: 'Data Directory', type: 'info' }));
      }
    });
  }
}

export const mainWindow = new MainWindow();



