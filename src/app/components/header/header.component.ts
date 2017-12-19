import { Component,  Input } from '@angular/core';
import { AppService } from '../../main-services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ AppService ]
})
export class HeaderComponent {
 constructor(private service: AppService) {}

 openLogin() {
   this.service.openLogin()
  }
}
