import { IpcRendererEvent } from 'electron';
import { CrossoverChannel, CrossoverModel } from './crossover-framework';

const electron: Electron.RendererInterface = window.require ? window.require('electron') : undefined;
const electronNotPrezent = e => console.error('electron not available')
export class Crossover {

  public static electron: Electron.RendererInterface = electron || { ipcRenderer: { send: electronNotPrezent, on: electronNotPrezent, removeListener: electronNotPrezent, invoke: electronNotPrezent } } as any as Electron.RendererInterface;
  public static isElectronRunning: boolean = !!electron;

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
