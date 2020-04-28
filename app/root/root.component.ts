import { Component, AfterViewInit } from '@angular/core';
import { electron } from '../shared/services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements AfterViewInit {

  title = "it works";

  constructor() {    
  }
  ngAfterViewInit(): void {
    this.takeScreenShot();
  }

  async takeScreenShot() {
    // var sources = await this.electronService.desktopCapturer.getSources({ types: ['window','screen'] });
    //let source = sources[0];
    //  console.log(sources);

    const thumbSize = determineScreenShotSize()
    let options = { types: ['screen'], thumbnailSize: thumbSize }    
    var sources = await electron.desktopCapturer.getSources(options);  
    var image = sources[0].thumbnail.toDataURL();        
    document.body.style.background = `url("${image}") top right no-repeat`;
    document.body.style.backgroundAttachment = "fixed";

    function determineScreenShotSize () {
      const width = 2560;
      const height = 1440;
      const maxDimension = Math.max(width, height)
      return {
        width: maxDimension * window.devicePixelRatio,
        height: maxDimension * window.devicePixelRatio
      }
    }
  }

  
}
