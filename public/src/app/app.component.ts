import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes;

  constructor (private _noteApi: NoteService) {}
  
  ngOnInit() {
    this.getNotes();
  }
  getNotes() {
    console.log('retrieving all notes');
    this._noteApi.getNotes()
      .then( notes => {
        this.notes = notes;
      })
      .catch();
  } 
  updateNotes() {
    console.log('updating notes on page');
    this.getNotes();
  }
}
