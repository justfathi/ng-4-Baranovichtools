import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../main-services/app.service';
import { Title } from '@angular/platform-browser'; 
import { SeoService } from '../../../main-services/seo.service';
import { TableBasicComponent } from '../../table-basic/table-basic.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ AppService ]
})
export class HomeComponent implements OnInit {
  constructor(
    private service: AppService, 
    private title: Title,
    private seo:SeoService 
    ) {}

  ngOnInit() {
    this.title.setTitle('Барановичская библиотека инструментов');
  	this.seo.generateTags({
  		title: "Главная страница",
  		description: 'Baranovichytools - библиотека инструментов в Барановичах. Карта проезда, адрес и график работы. Добавлены новые инструменты!',
  		slug: 'home'
   	})
  }

  openMessage(){
  	this.service.openMessage()
  }
}
