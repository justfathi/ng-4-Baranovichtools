import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-meetings-window',
  templateUrl: './meetings-window.component.html',
  styleUrls: ['./meetings-window.component.scss']
})
export class MeetingsWindowComponent {
meetings: Observable<any[]>
  constructor(private db: AngularFireDatabase, private router: Router) {
   this.meetings = this.db.list('meetings', ref => ref.orderByChild('order').limitToLast(3)).valueChanges();
  }

 toMeetings() {
 	this.router.navigateByUrl('/meetings')
 	window.scroll(0, 0);
 };
}
