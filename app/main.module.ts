import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class MainModule { }
