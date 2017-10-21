import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent {
showProgress = true;
dateText = 'Дата мероприятия';	
meetings: Observable<any[]>
  constructor(private db: AngularFireDatabase) { 
  	 this.meetings = this.db.list('meetings', ref => ref.orderByChild('order')).valueChanges();
  	 this.meetings.subscribe(()=> this.showProgress = false)
  }
}