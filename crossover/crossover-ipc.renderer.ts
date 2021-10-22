import { DesktopCapturer, IpcRenderer, IpcRendererEvent } from 'electron';
import { CrossoverChannel, CrossoverModel } from './crossover-framework';
import * as electron from 'electron';
import * as electronRemote from '@electron/remote/renderer';
const electronRunning = e => { if (!e) console.error('electron not available') };
electronRunning(!!electron);
export class Crossover {

  public static electron = electron;
  public static browserWindow = electronRemote.getCurrentWindow();
  static isElectronRunning: boolean = !!electron;

  public static send<TModel extends CrossoverModel>(channel: (new () => CrossoverChannel) | CrossoverChannel, model: TModel) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
    Crossover.electron.ipcRenderer.send(eventName, model);      
  }

  public static subscribe(channel: (new () => CrossoverChannel) | CrossoverChannel, listener: <T>(event: IpcRendererEvent, model: T) => void) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
    Crossover.electron.ipcRenderer.on(eventName, listener);
  }

  public static unsubscribe<TChannel extends CrossoverChannel>(channel: (new () => TChannel) | TChannel, listener: (...args: any[]) => void) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
    Crossover.electron.ipcRenderer.removeListener(eventName, listener);
  }

  public static async get<T>(channel: (new () => CrossoverChannel) | CrossoverChannel, model?: CrossoverModel): Promise<T> {
    let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
    var result = await Crossover.electron.ipcRenderer.invoke(eventName, model);
    return result;
  }
}
