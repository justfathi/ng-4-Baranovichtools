import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { SeoService } from '../../../main-services/seo.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
showProgress = true;
dateText = 'Дата мероприятия';	
meetings: Observable<any[]>
  constructor(
    private db: AngularFireDatabase,
    private title: Title,
    private seo: SeoService
    ) { 
  	 this.meetings = this.db.list('meetings', ref => ref.orderByChild('order').limitToLast(10)).valueChanges();
  	 this.meetings.subscribe(()=> this.showProgress = false)
  }

  ngOnInit(){
    this.title.setTitle('События и мероприятия библиотеки инструментов');
  	this.seo.generateTags({
      title: "События",
      description: 'События и мероприятия нашего сообщества',
      slug: 'meetings'
    })
  }
}