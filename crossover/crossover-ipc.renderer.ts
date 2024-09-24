import { IpcRenderer, IpcRendererEvent } from 'electron';
import { CrossoverChannel, CrossoverModel } from './crossover-framework';

const electronNotPrezent = e => console.error('electron not available')
export class Crossover {

  public static electron: ElectronRenderer = (window as any).electron as ElectronRenderer;
  public static isElectronRunning: boolean = !!this.electron;

  public static send<TModel extends CrossoverModel>(channel: (new () => CrossoverChannel) | CrossoverChannel, model: TModel) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventID : (channel as any).channelID;
    Crossover.electron.send(eventName, model);
  }

  public static subscribe<T>(channel: (new () => CrossoverChannel) | CrossoverChannel, listener: (event: IpcRendererEvent, model: T) => void) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventID : (channel as any).channelID;
    Crossover.electron.on(eventName, listener);
  }

  public static unsubscribe<TChannel extends CrossoverChannel>(channel: (new () => TChannel) | TChannel, listener: (...args: any[]) => void) {
    let eventName = channel instanceof CrossoverChannel ? channel.eventID : (channel as any).channelID;
    Crossover.electron.removeListener(eventName, listener);
  }

  public static async get<T>(channel: (new () => CrossoverChannel) | CrossoverChannel, model?: CrossoverModel): Promise<T> {
    let eventName = channel instanceof CrossoverChannel ? channel.eventID : (channel as any).channelID;
    console.log(eventName)
    var result = await Crossover.electron.invoke(eventName, model);
    return result;
  }
}


interface ElectronRenderer extends IpcRenderer {
  close: () => void;
}