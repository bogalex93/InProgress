import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { RootComponent } from './root/root.component';
import { ConfirmDeleteDirective, NgInitDirective } from './shared/directives/directives';
import { ConfirmationOverlayComponent } from './shared/components/confirmation-overlay/confirmation-overlay.component';

@NgModule({
  declarations: [
    RootComponent,
    ConfirmDeleteDirective,
    NgInitDirective,
    ConfirmationOverlayComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})

export class MainModule { }
