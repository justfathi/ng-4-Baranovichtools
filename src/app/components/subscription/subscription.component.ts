import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})

export class SubscriptionComponent {
  form: FormGroup;
  sent: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient ) {
  	this.createForm();
    this.sent = false;
  }
  
  createForm() {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    this.sent = true;
    const { firstname, lastname, email } = this.form.value;
    const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let formRequest = { firstname, lastname, email, date };
    // this.db.list('/messages').push(formRequest);
     const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
      this.http.post('http://127.0.0.1:3000/subscription', JSON.stringify(formRequest), {
      headers: headers
    })
    .subscribe(data => {
      if(data === '200') {
         //console.log(data)
       }
    });
    this.form.reset();
  }

}



