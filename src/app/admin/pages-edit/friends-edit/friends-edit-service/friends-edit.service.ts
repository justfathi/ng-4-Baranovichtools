import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Injectable()
export class FriendsEditService {
  friends: Observable<any[]>;
  uploads: Observable<any[]>;


  constructor(private db: AngularFireDatabase, ) { 
    this.uploads = db.list('uploads').valueChanges();
  	this.friends = db.list('friends').valueChanges();

  }

  getUploads() {
    return this.uploads;
  }

  getFriends() {
    return this.friends;
  }

 
  toDb(name, id, data) {
	 const toSend = this.db.object(`/${name}/${id}`);
	 toSend.set(data);
   }
}
