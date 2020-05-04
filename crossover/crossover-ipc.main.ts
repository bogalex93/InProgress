import { ipcMain, IpcMainEvent, BrowserWindow } from 'electron';
import { CrossoverChannel, CrossoverModel } from './crossover-framework';

export class Crossover {

    static listen<TChannel extends CrossoverChannel>(channel: (new () => TChannel) | TChannel, listener: (event: IpcMainEvent, model: CrossoverModel) => void) {
        let eventName = channel instanceof CrossoverChannel? channel.eventName : (channel as any).channelName;  
        ipcMain.on(eventName, listener);
    }

    static handle<TChannel extends CrossoverChannel>(channel:(new () => TChannel) | TChannel, listener: (event: IpcMainEvent, model: CrossoverModel) => CrossoverModel) {
        let eventName = channel instanceof CrossoverChannel? channel.eventName : (channel as any).channelName;  
        ipcMain.handle(eventName, listener);
    }

    static send<TChannel extends CrossoverChannel>(channel: (new () => TChannel) | TChannel, window: BrowserWindow, model?: CrossoverModel) {                
        let eventName = channel instanceof CrossoverChannel? channel.eventName : (channel as any).channelName;  
        window.webContents.send(eventName, model);
    }
}
