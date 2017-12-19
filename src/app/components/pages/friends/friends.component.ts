import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/observable';
import { SeoService } from '../../../main-services/seo.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  showProgress = true;
  friends: Observable<any[]>
  constructor(private db: AngularFireDatabase, private title: Title,  private seo: SeoService) { 
  	this.friends = this.db.list('friends', ref => ref.orderByChild('order')).valueChanges();
  	this.friends.subscribe(()=> this.showProgress = false)
  }

  ngOnInit() {
    this.title.setTitle('Друзья библиотеки инструментов');
  	this.seo.generateTags({
  		title: "Друзья",
  		description: 'Наши друзья и партнеры',
  		slug: 'friends'
   	});
  }
}

