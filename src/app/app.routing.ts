import { Routes } from "../../node_modules/@angular/router";
import { ShowNotesComponent } from "./show-notes/show-notes.component";
import { CreateNoteComponent } from "./create-note/create-note.component";

export const ROUTES: Routes = [
    { path: 'show', component: ShowNotesComponent },
    { path: 'create', component: CreateNoteComponent },
]