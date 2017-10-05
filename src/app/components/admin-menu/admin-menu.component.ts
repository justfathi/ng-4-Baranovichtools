import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent {

  constructor(private auth:AuthService) { }

  logOut(){
  	this.auth.logOut()
  }
}
