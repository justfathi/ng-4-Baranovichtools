import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { SeoService } from '../../../main-services/seo.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{
  showProgress = true;
  dateText = 'Дата публикации:';
  news: Observable<any[]>

  constructor(
    private db: AngularFireDatabase,
    private title: Title, 
    private seo: SeoService ) {
  	this.news = this.db.list('news', ref => ref.orderByChild('order').limitToLast(10)).valueChanges();
  	this.news.subscribe(()=> this.showProgress = false)
  }

  ngOnInit() {
    this.title.setTitle('Новости библиотеки инструментов');
    this.seo.generateTags({
      title: "Новости",
      description: 'Новости барановичской библиотеки инструментов.',
      slug: 'news'
    });
  }
}
