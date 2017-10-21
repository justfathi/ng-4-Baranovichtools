import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent  {
   newsRef: AngularFireList<any>;
   news: Observable<any[]>;

   constructor( private db: AngularFireDatabase) {
    this.newsRef = db.list('news', ref => ref.orderByChild('order'));
    this.news = this.newsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
   }

  delete(key: string) {
    this.newsRef.remove(key);
  }
}
