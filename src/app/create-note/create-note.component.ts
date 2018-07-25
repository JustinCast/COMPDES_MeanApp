import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  createGroup: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private noteService: NoteService
  ) { 
    this.createGroup = this._fb.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      'assignmentDate': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {

  }

}
