import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class ConfigService {
  hideBanner: boolean;

  // subscribe
  constructor(@Inject(DOCUMENT) private document) {this.hideBanner = false}

  switchBanner() {
  	let el = this.document.getElementById('theme');
  	(this.hideBanner === false)? this.hideBanner = true : this.hideBanner = false;
  	(this.hideBanner === false)? el.setAttribute('href', 'assets/css/title.css') : el.setAttribute('href', 'assets/css/title2.css');
  }
}
