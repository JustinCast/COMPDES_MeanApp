import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Note } from './models/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Array<Note>
  constructor(
    private _http: HttpClient
  ) { }

  getNotes() {
    this._http.get<Note>(`http://localhost:3000/api/getNotes`)
  }
}
