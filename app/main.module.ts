import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { RootComponent } from './root/root.component';
import { ConfirmDeleteDirective, NgInitDirective } from './shared/directives/directives';
import { ConfirmationOverlayComponent } from './shared/components/confirmation-overlay/confirmation-overlay.component';
import { NotesListComponent } from './core/notes-list/notes-list.component';

@NgModule({
  imports: [
    BrowserModule,
    MainRoutingModule,
    FormsModule
  ],
  declarations: [
    RootComponent,
    ConfirmDeleteDirective,
    NgInitDirective,
    ConfirmationOverlayComponent,
    NotesListComponent
  ],
  providers: [],
  bootstrap: [RootComponent]
})

export class MainModule { }
