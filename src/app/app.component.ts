import { Component } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { AuthService } from './services/auth.service';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  admin: boolean;
  subscribeAdmin;
    

	constructor(private snackBar:MdSnackBar, private auth:AuthService ) {

    // snackbar
		this.openSnackBar('Добро пожаловать в библиотеку инструментов', '');

    // check admin auth
    this.subscribeAdmin = this.auth.subscribeAdmin.subscribe((value) => {
        this.admin = this.auth.adminAuth;
    });
  }

  // open snackbar
	openSnackBar(message: string, action?: string) {
    let config = new MdSnackBarConfig();
    config.extraClasses = ['custom-class'];
    config.duration = 5000 ;
   	this.snackBar.open(message, action ? '' : undefined, config);
   }
}
