import { ipcMain, IpcMainEvent, BrowserWindow } from 'electron';
import { CrossoverChannel, CrossoverModel } from './crossover-framework';

export class Crossover {

  static listen<TModel extends CrossoverModel>(channel: (new () => CrossoverChannel) | CrossoverChannel, listener: (event: IpcMainEvent, model: TModel) => void) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
    ipcMain.on(eventName, listener);
  }

  static handle<TModel extends CrossoverModel>(channel: (new () => CrossoverChannel) | CrossoverChannel, listener: <T>(event: IpcMainEvent, model: TModel) => Promise<T | any>) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
    ipcMain.handle(eventName, listener);
  }

  static send<TModel extends CrossoverModel>(channel: (new () => CrossoverChannel) | CrossoverChannel, window: BrowserWindow, model?: TModel) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
    window.webContents.send(eventName, model);
  }
}
