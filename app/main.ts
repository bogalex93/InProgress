import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './main.module';
import { environment } from './global/environment';
import { CrossoverRenderer } from 'crossover/crossover-ipc.renderer';
import { InitializationEvents } from 'crossover/crossover.channels';
import { ScreenMeta } from 'crossover/crossover.models';

if (environment.production) {
  enableProdMode();
}

async function takeScreenShot(screenMeta: ScreenMeta) {
  const maxDimension = Math.max(screenMeta.width, screenMeta.height);
  const thumbSize = { width: maxDimension * window.devicePixelRatio, height: maxDimension * window.devicePixelRatio };
  let options = { types: ['screen'], thumbnailSize: thumbSize };
  var sources = await CrossoverRenderer.electron.desktopCapturer.getSources(options);
  var image = sources[0].thumbnail.toDataURL();
  document.body.style.background = `url("${image}") top right no-repeat`;
}

CrossoverRenderer.subscribe(InitializationEvents, (e, m: ScreenMeta) => takeScreenShot(m));
platformBrowserDynamic().bootstrapModule(MainModule).catch(err => console.error(err));
