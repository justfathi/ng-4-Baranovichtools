import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  showProgress = true;
  dateText = 'Дата публикации:';
  news: Observable<any[]>

  constructor(private db: AngularFireDatabase) {
  	this.news = this.db.list('news', ref => ref.orderByChild('order')).valueChanges();
  	this.news.subscribe(()=> this.showProgress = false)
  }
}
