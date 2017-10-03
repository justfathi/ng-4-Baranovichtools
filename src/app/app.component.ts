import { Component } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
	constructor(private snackBar:MdSnackBar){
		this.openSnackBar('Добро пожаловать в библиотеку инструментов', '')
	}
	openSnackBar(message: string, action?: string) {
    let config = new MdSnackBarConfig();
    config.extraClasses = ['custom-class'];
    config.duration = 5000 ;
   	this.snackBar.open(message, action ? '' : undefined, config);
   }
}
