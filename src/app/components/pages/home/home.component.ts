import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { TableBasicComponent } from '../../table-basic/table-basic.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private service: AppService) { }

  ngOnInit() {
  	this.service.onClickAddScript('map');
  }
  openMessage(){
  	this.service.openMessage()
  }
}
