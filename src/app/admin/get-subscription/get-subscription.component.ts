import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-subscription',
  templateUrl: './get-subscription.component.html',
  styleUrls: ['./get-subscription.component.scss']
})
export class GetSubscriptionComponent implements OnInit {
 private email;
 private delEmail;
 
 constructor(
  private route: ActivatedRoute,
  private db: AngularFireDatabase,
  private router:Router) {}

  ngOnInit() {
  	this.route.queryParams.subscribe(params => {
      this.email = params['res'];
      this.delEmail = params['del'];
      if(this.email !== undefined) this.sendToDb(this.email);
      if(this.delEmail !== undefined) this.removeFromDb(this.delEmail);
      this.close();
    });
  }

  validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  sendToDb(email) {
    if(this.validateEmail(email)) {
       const validEmailForFb = email.replace(/\./g, ',');
       const toDb =  this.db.object(`/subscribers/${validEmailForFb}`);
       toDb.set({'email': email});
    } else {
      console.log("email validate err")
    }
    return false;
  }

  removeFromDb(delEmail){
    if(this.validateEmail(delEmail)) {
       const validEmailForFb = delEmail.replace(/\./g, ',');
       this.db.object(`/subscribers/${validEmailForFb}`).remove();
    } else {
      console.log("email validate err")
    }
    return false;
  }


  close(){
    setTimeout(()=> this.router.navigate(['/home']), 5000);
  }
}
