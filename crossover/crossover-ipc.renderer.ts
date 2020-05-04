import { IpcRendererEvent } from 'electron';
import { CrossoverChannel, CrossoverModel } from './crossover-framework';
const electron: Electron.RendererInterface = window.require('electron');

export class Crossover {

    public static electron: Electron.RendererInterface = electron;

    public static send<TChannel extends CrossoverChannel>(channel: (new () => TChannel) | TChannel, model: CrossoverModel) {
        let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
        electron.ipcRenderer.send(eventName, model);
    }

    public static subscribe<TChannel extends CrossoverChannel>(channel: (new () => TChannel) | TChannel, listener: (event: IpcRendererEvent, model: CrossoverModel) => void) {
        let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
        electron.ipcRenderer.on(eventName, listener);
    }

    public static unsubscribe<TChannel extends CrossoverChannel>(channel: (new () => TChannel) | TChannel, listener: (...args: any[]) => void) {
        let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
        electron.ipcRenderer.removeListener(eventName, listener);
    }

    public static async get<TChannel extends CrossoverChannel, TModel extends CrossoverModel>(channel: (new () => TChannel) | TChannel, model?: CrossoverModel): Promise<TModel> {
        let eventName = channel instanceof CrossoverChannel ? channel.eventName : (channel as any).channelName;
        var result = await electron.ipcRenderer.invoke(eventName, model);
        return result;
    }
}
