import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from '../../../main-services/app.service';
import { SeoService } from '../../../main-services/seo.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  providers: [ AppService ]
})
export class MembershipComponent implements OnInit {
  costRef: AngularFireList<any>;
  arrCost = [];
  a; b; c; d;
  
  constructor(
    private service:AppService, 
    private db: AngularFireDatabase,
    private title: Title, 
    private seo: SeoService ) {
    this.costRef = db.list('cost');
  }

 ngOnInit(){
    this.title.setTitle('Членство');
    this.seo.generateTags({
      title: "Членство",
      description: 'Станьте участником нашей библиотеки инструментов.',
      slug: 'membership'
    });
    this.costRef.valueChanges().subscribe(action => {
      this.arrCost = [];
      for (var key in action) {
        if( action.hasOwnProperty(key))
        this.arrCost.push(action[key])
      }
      this.a = this.arrCost[0];
      this.b = this.arrCost[1];
      this.c = this.arrCost[2];
      this.d = this.arrCost[3];
    });
  }

   openMessage(){
  	this.service.openMessage()
  }

}
