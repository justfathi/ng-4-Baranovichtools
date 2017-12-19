import { Component, OnInit } from '@angular/core';
import { AppService } from '../../main-services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [ AppService ]
})
export class FooterComponent implements OnInit {

  constructor(private service: AppService) { }
  ngOnInit() {
  }
  openMessage() {
   this.service.openMessage()
  }
  openSubscription() {
   this.service.openSubscription()
  }
}
