import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './main.module';
import { environment } from './global/environment';
import { Crossover } from 'crossover/crossover-ipc.renderer';
import { InitializationChannel } from 'crossover/crossover.channels';
import { ScreenMeta } from 'crossover/crossover.models';

let screenMeta : ScreenMeta;

if (environment.production) {
  enableProdMode();
}

async function takeScreenShot() {  
  const maxDimension = Math.max(screenMeta.width, screenMeta.height);
  const thumbSize = { width: maxDimension * window.devicePixelRatio, height: maxDimension * window.devicePixelRatio };
  let options = { types: ['screen'], thumbnailSize: thumbSize };
  var sources = await Crossover.electron.desktopCapturer.getSources(options);
  var image = sources[0].thumbnail.toDataURL();
  document.body.style.background = `url("${image}") top right no-repeat`;
}

Crossover.subscribe(InitializationChannel, (e, m: ScreenMeta) => { screenMeta = m; takeScreenShot()});
//window.onblur = e=> document.body.style.background =  "transparent"; 
platformBrowserDynamic().bootstrapModule(MainModule).catch(err => console.error(err));
