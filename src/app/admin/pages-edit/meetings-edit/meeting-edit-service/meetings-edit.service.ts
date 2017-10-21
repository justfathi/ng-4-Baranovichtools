import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Injectable()
export class MeetingsEditService {
  meetings: Observable<any[]>;
  uploads: Observable<any[]>;


  constructor(private db: AngularFireDatabase, ) { 
    this.uploads = db.list('uploads').valueChanges();
  	this.meetings = db.list('meetings').valueChanges();

  }

  getUploads() {
    return this.uploads;
  }

  getFriends() {
    return this.meetings;
  }

 
  toDb(name, id, data) {
	 const toSend = this.db.object(`/${name}/${id}`);
	 toSend.set(data);
   }
}
