import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-meetings-edit',
  templateUrl: './meetings-edit.component.html',
  styleUrls: ['./meetings-edit.component.scss']
})
export class MeetingsEditComponent {
   meetingsRef: AngularFireList<any>;
   meetings: Observable<any[]>;

   constructor( private db: AngularFireDatabase) {
    this.meetingsRef = db.list('meetings', ref => ref.orderByChild('order'));
    this.meetings = this.meetingsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
   }

  delete(key: string) {
    this.meetingsRef.remove(key);
  }
}
