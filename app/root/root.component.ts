import { Component, AfterViewInit } from '@angular/core';
import { ScreenMeta } from 'crossover/crossover.models';

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
