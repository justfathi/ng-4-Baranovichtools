import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../main-services/app.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  constructor(private service:AppService) { }

  ngOnInit() {
  }

   openMessage(){
  	this.service.openMessage()
  }

}
