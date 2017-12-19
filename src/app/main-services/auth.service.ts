import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  adminAuth: boolean; 

  //subscribe
  subscribeAdmin: Subject<boolean> = new Subject<boolean>();
  constructor(private dbauth:AngularFireAuth) { this.adminAuth = false}


  signInWithEmailAndPassword(email, password) {
     this.dbauth.auth.signInWithEmailAndPassword(email, password).then(res => {
     if(res.email === "admin@example.com") {
         this.adminAuth = true;
         this.subscribeAdmin.next(this.adminAuth);
      }
    }).catch(err => console.log(err))
  }

  getAdminAuth(){
  	return this.adminAuth;
  }

  logOut(){
    this.dbauth.auth.signOut();
    this.adminAuth = false;
    this.subscribeAdmin.next(this.adminAuth)
  }
}
