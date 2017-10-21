import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-friends-edit',
  templateUrl: './friends-edit.component.html',
  styleUrls: ['./friends-edit.component.scss'],
})
export class FriendsEditComponent {
   friendsRef: AngularFireList<any>;
   friends:  Observable<any[]>;

   constructor( private db: AngularFireDatabase) {
   	  this.friendsRef = db.list('friends', ref => ref.orderByChild('order'));
   	  this.friends = this.friendsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
   }

  delete(key: string) {    
    this.friendsRef.remove(key); 
  }
}
