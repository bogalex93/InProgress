import { CrossoverModel } from './crossover.models';
import { CrossoverChannel } from './crossover.channels';
import { IpcRendererEvent } from 'electron';

const electron: Electron.RendererInterface = window.require('electron');

export class CrossoverRenderer {

    public static electron : Electron.RendererInterface = electron;

    public static send<TChannel extends CrossoverChannel>(channel: (new () => TChannel) | TChannel, model: CrossoverModel) {
        let eventName = channel instanceof CrossoverChannel? channel.eventName : new channel().constructor.name;        
        electron.ipcRenderer.send(eventName, model);
    }

    public static subscribe<TChannel extends CrossoverChannel>(channel: (new () => TChannel) | TChannel, listener: (event: IpcRendererEvent, model: CrossoverModel) => void) {        
        let eventName = channel instanceof CrossoverChannel? channel.eventName : new channel().constructor.name;  
        electron.ipcRenderer.on(eventName, listener);
    }

    public static unsubscribe<TChannel extends CrossoverChannel>(channel: (new () => TChannel) | TChannel, listener: (...args: any[]) => void) {
        let eventName = channel instanceof CrossoverChannel? channel.eventName : new channel().constructor.name;  
        electron.ipcRenderer.removeListener(eventName, listener);
    }

    public static async get<TChannel extends CrossoverChannel, TModel extends CrossoverModel>(channel: (new () => TChannel) | TChannel, model?: CrossoverModel): Promise<TModel> {        
        let eventName = channel instanceof CrossoverChannel? channel.eventName : new channel().constructor.name;  
        var result = await electron.ipcRenderer.invoke(eventName, model);
        return result;
    }
}
