import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';


@Injectable()
export class NewsEditService {
  news: Observable<any[]>;
  uploads: Observable<any[]>;


  constructor(private db: AngularFireDatabase, ) { 
    this.uploads = db.list('uploads').valueChanges();
  	this.news = db.list('news').valueChanges();

  }

  getUploads() {
    return this.uploads;
  }

  getNews() {
    return this.news;
  }

 
  toDb(name, id, data) {
	 const toSend = this.db.object(`/${name}/${id}`);
	 toSend.set(data);
   }
}