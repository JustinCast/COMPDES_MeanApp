import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../node_modules/@angular/common/http';
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

  saveNote(note: Note) {
    this._http.post(`http://localhost:3000/api/saveNote`, note)
    .subscribe(
      success => {
        alert('success')
      }
      ,
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Error del lado del cliente
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // Error del lado del backend
          console.log(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error)}`)
        }
      }
    )
  }
}
