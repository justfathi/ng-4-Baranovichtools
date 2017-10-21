import { Component } from '@angular/core';
import { AppService } from '../../../main-services/app.service';
import { TableBasicComponent } from '../../table-basic/table-basic.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private service: AppService) {}

  openMessage(){
  	this.service.openMessage()
  }
}
