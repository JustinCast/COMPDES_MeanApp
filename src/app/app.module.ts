import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { MatButtonModule, MatDatepickerModule } from "@angular/material";

import { AppComponent } from './app.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ROUTES } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ShowNotesComponent,
    CreateNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MatButtonModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
