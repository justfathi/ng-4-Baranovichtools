import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {
  showProgress = true;
  friends: Observable<any[]>
  constructor(private db: AngularFireDatabase) { 
  	this.friends = this.db.list('friends', ref => ref.orderByChild('order')).valueChanges();
  	this.friends.subscribe(()=> this.showProgress = false)
  }
}

