import { ipcMain, IpcMainEvent, BrowserWindow } from 'electron';
import { CrossoverModel } from './crossover.models';
import { CrossoverChannel } from './crossover.channels';

export class CrossoverMain {

    static listen<TChannel extends CrossoverChannel>(channel: NoParamConstructor<TChannel>, listener: (event: IpcMainEvent, model: CrossoverModel) => void) {
        var channelName = new channel().constructor.name;
        ipcMain.on(channelName, listener);
    }

    static handle<TChannel extends CrossoverChannel>(channel: NoParamConstructor<TChannel>, listener: (event: IpcMainEvent, model: CrossoverModel) => CrossoverModel) {
        var channelName = new channel().constructor.name;
        ipcMain.handle(channelName, listener);
    }

    static send<TChannel extends CrossoverChannel>(channel: NoParamConstructor<TChannel>, window: BrowserWindow, model: CrossoverModel) {
        var channelName = new channel().constructor.name;
        window.webContents.send(channelName, model);
    }
}

interface NoParamConstructor<T> {
    new(): T;
}