import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from '../../../main-services/app.service';
import { SeoService } from '../../../main-services/seo.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  providers: [ AppService ]
})
export class HelpComponent implements OnInit {

  constructor(
    private service:AppService, 
    private title: Title,
    private seo: SeoService) { }

  ngOnInit() {
    this.title.setTitle('Как помочь библиотеке инструментов');
    this.seo.generateTags({
      title: "Как нам помочь ?",
      description: 'Мы будем рады получить практически любое пожертвование инструментом',
      slug: 'help'
    })
  }
  
  openMessage(){
  	this.service.openMessage()
  }
}
