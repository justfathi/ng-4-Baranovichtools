import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable'

@Component({
  selector: 'app-friends-edit',
  templateUrl: './friends-edit.component.html',
  styleUrls: ['./friends-edit.component.scss']
})
export class FriendsEditComponent implements OnInit {
  uploads: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
  		this.uploads = db.list('uploads').valueChanges();
   }

  ngOnInit() {

  }

}
