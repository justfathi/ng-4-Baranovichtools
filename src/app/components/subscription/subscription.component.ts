import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})

export class SubscriptionComponent {
  selected = 'toSubscribe';
  html: string;
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

  choose(val) { this.selected = val; }

  onSubmit() {
    this.sent = true;
    const { firstname, lastname, email } = this.form.value;
    const formRequest = { firstname, lastname, email };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    if(this.selected === 'toSubscribe')  this.sendSubscription(formRequest, headers);
    if(this.selected === 'toUnsubscribe') this.sendUnsubscription(formRequest, headers);
    this.form.reset();
  }

  sendSubscription(formRequest, headers) {
    this.http.post('/assets/subscription.php', JSON.stringify(formRequest), {
      headers: headers,
      responseType: 'text'
    }).subscribe(data => {});
  }

  sendUnsubscription(formRequest, headers) {
    this.http.post('/assets/unsubscription.php', JSON.stringify(formRequest), {
      headers: headers,
      responseType: 'text'
    }).subscribe(data => {});
  }
}



