import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './main.module';
import { environment } from './global/environment';
import { Crossover } from 'crossover/crossover-ipc.renderer';
import { InitializationChannel } from 'crossover/crossover.channels';
import { DisplayInfo } from 'crossover/crossover.models';
import { SourcesOptions, DesktopCapturerSource } from 'electron';

if (environment.production) {
  enableProdMode();
}

async function takeScreenShot(displayInfo: DisplayInfo) {
  const maxDimension = Math.max(displayInfo.width, displayInfo.height);
  const thumbSize = { width: maxDimension * window.devicePixelRatio, height: maxDimension * window.devicePixelRatio };
  let options: SourcesOptions = { types: ['screen'], thumbnailSize: thumbSize };
  var sources: DesktopCapturerSource[] = await Crossover.electron.desktopCapturer.getSources(options);
  var image = sources[0].thumbnail.toDataURL();
  document.body.style.background = `url("${image}") top right no-repeat`;
}

//Crossover.subscribe(InitializationChannel.with(ScreenMeta), (e, m: ScreenMeta) => takeScreenShot(m));

platformBrowserDynamic().bootstrapModule(MainModule).catch(err => console.error(err));
