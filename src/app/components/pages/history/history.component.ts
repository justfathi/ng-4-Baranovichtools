import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../../main-services/seo.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private title: Title, private seo: SeoService) { }

  ngOnInit() {
    this.title.setTitle('История библиотеки инструментов');
  	this.seo.generateTags({
      title: "Наша история",
      description: 'История БИ Барановичи – это история развития экономики совместного потребления.',
      slug: 'history'
    });
  }

}
