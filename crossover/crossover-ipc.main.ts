import { ipcMain, IpcMainEvent, BrowserWindow } from 'electron';
import { CrossoverChannel, CrossoverModel } from './crossover-framework';

export class Crossover {

  static listen<TModel extends CrossoverModel>(channel: (new () => CrossoverChannel) | CrossoverChannel, listener: (event: IpcMainEvent, model: TModel) => void) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
    return ipcMain.on(eventName, listener);
  }

  static handle<TModel extends CrossoverModel>(channel: (new () => CrossoverChannel) | CrossoverChannel, listener: <T>(event: IpcMainEvent, model: TModel) => Promise<T | TModel>) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
    return ipcMain.handle(eventName, listener);
  }

  static send<TModel extends CrossoverModel>(channel: (new () => CrossoverChannel) | CrossoverChannel, window: BrowserWindow, model?: TModel) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
    return window.webContents.send(eventName, model);
  }
}
