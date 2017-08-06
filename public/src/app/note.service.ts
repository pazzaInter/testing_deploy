import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class NoteService {

  constructor(private _http: Http) { }

  getNotes() {
    console.log('getting all notes');
    return this._http.get('/api/notes')
      .map(response => response.json())
      .toPromise();
  }
  addNote(note) {
    return this._http.post('/api/notes', note)
      .map(response => response.json())
      .toPromise();
  }
}
