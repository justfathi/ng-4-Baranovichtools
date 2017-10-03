import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private service:AppService) { }

  ngOnInit() {
  }
  
  openMessage(){
  	this.service.openMessage()
  }
}
