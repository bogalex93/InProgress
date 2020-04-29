import { CrossoverModel } from './crossover.models';
import { CrossoverChannel } from './crossover.channels';
import { IpcRendererEvent } from 'electron';

const electron: Electron.RendererInterface = window.require('electron');

export class CrossoverRenderer {

    public static electron : Electron.RendererInterface = electron;

    public static send<TChannel extends CrossoverChannel>(channel: NoParamConstructor<TChannel>, model: CrossoverModel) {
        var channelName = new channel().constructor.name;        
        electron.ipcRenderer.send(channelName, model);
    }

    public static subscribe<TChannel extends CrossoverChannel>(channel: NoParamConstructor<TChannel>, listener: (event: IpcRendererEvent, model: CrossoverModel) => void) {
        var channelName = new channel().constructor.name;        
        electron.ipcRenderer.on(channelName, listener);
    }

    public static unsubscribe<TChannel extends CrossoverChannel>(channel: NoParamConstructor<TChannel>, listener: (...args: any[]) => void) {
        var channelName = new channel().constructor.name;
        electron.ipcRenderer.removeListener(channelName, listener);
    }

    public static async get<TChannel extends CrossoverChannel, TModel extends CrossoverModel>(channel: NoParamConstructor<TChannel>, model?: CrossoverModel): Promise<TModel> {        
        var channelName = new channel().constructor.name;        
        var result = await electron.ipcRenderer.invoke(channelName, model);
        return result;
    }
}

interface NoParamConstructor<T> {
    new (): T;
}
