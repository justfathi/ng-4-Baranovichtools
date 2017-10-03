import { Component,  Input, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // menus: any;
  // navMenu$: FirebaseListObservable<any[]>;

   constructor(
    private service: AppService, 
    private db: AngularFireDatabase) {
     // this.navMenu$ = db.list('/menus');
  }

  

 ngOnInit() {
   // this.navMenu$.subscribe(snapshot => {
   //     this.menus = [];
   //     snapshot.forEach(snapshot => { 
   //     this.menus.push(snapshot);
   //    });
   // });
  }
}
