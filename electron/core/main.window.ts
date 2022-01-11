import { screen, BrowserWindowConstructorOptions, WebPreferences, Display, BrowserWindow } from 'electron';
import * as glasstron from 'glasstron'
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

    let webPreferences: WebPreferences = { nodeIntegration: true };
    var iconPath = path.join(environment.workspaceDir, `./assets/in-progress.png`);
    let windowOptions: BrowserWindowConstructorOptions = {
      transparent: true,
      frame: false,
      skipTaskbar: false,
      webPreferences: webPreferences,
      minimizable: false,
      icon: iconPath
    };
    this.win = new glasstron.BrowserWindow(windowOptions) as BrowserWindow;
    //              ^~~~~~~
    // Windows 10 1803+; for older versions you
    // might want to use 'blurbehind'
    // (<any>this.win).blurType = "blurbehind";
    // (<any>this.win).setBlur(true);
    this.win.setBounds(this.graphicProperties.appBounds, true);


    this.win.loadURL(appUrl);
    //win.webContents.openDevTools();
    //dialog.showErrorBox('test', dbPath);

    this.win.on('closed', () => this.onClosed());
  };

  onStartup() {

    const { id, size, workArea, bounds } = screen.getPrimaryDisplay();
    const defaultSizes = { '3840': 495, '2560': 365, '1920': 320 };
    const appWidth = defaultSizes[bounds.width] || 300;
    const appHeight = workArea.height / 2;
    const positionY = workArea.y + appHeight - (size.height - workArea.height - 30);
    const positionX = workArea.x + bounds.width - appWidth - 10;
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
    Crossover.handle<GenericData>(DataChannel.with(ReadData), async (e, m) => await dataHandler.getData(m));
  }

  checkDataDir() {
    const dataPath = path.join(environment.workspaceDir, '/appdata').replace('\\app.asar\\prod_build', '');
    fs.opendir(dataPath, (err, dir) => {
      if (err) {
        fs.mkdir(dataPath, () => console.log('appdata created'));
      }
    });
  }
}

export const mainWindow = new MainWindow();


