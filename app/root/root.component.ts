import { Component, AfterViewInit } from '@angular/core';
import { electron } from '../shared/services/electron.service';
import { CrossoverRenderer } from 'crossover/crossover-ipc.renderer';
import { ScreenMeta } from 'crossover/crossover.models';
import { InitializationEvents } from 'crossover/crossover.channels';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements AfterViewInit {

  title = "it works";
  screenMeta: ScreenMeta;

  constructor() {    
   
  }
  
  async ngAfterViewInit(): Promise<void> {      
   
  }


}
