import { Component, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { AuthService } from './main-services/auth.service';
import { SeoService } from './main-services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements AfterViewInit {
  admin: boolean;
  // subscribe
  subscribeAdmin;

 	constructor(private auth: AuthService, @Inject(DOCUMENT) private document) { 
      // check admin auth
      this.subscribeAdmin = this.auth.subscribeAdmin.subscribe(() => {
      this.admin = this.auth.adminAuth;
    });
  }

  ngAfterViewInit(){
    this.document.getElementById('spinner').setAttribute('style', 'display: none')
  }
}
