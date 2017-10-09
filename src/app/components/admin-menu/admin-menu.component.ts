import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {
  constructor(private auth:AuthService, private config:ConfigService) { }

  logOut(){
  	this.auth.logOut()
  }

  // dell after work
  ngOnInit() {
    this.config.switchBanner()
  }

  switchBanner() {
    this.config.switchBanner()
  }
}
