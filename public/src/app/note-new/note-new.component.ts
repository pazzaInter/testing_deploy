import { Component, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent {
  note = new Note();
  @Output() newNote = new EventEmitter();

  constructor(private _noteApi: NoteService) { }
  
  onClick() {
    this._noteApi.addNote(this.note)
      .then(note => {
        console.log('added new note to db');
        this.newNote.emit();
      }) 
      .catch();
    this.note = new Note();
  }
}
