import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  form: FormGroup;
  sent: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) {
  	this.createForm();
    this.sent = false;
  }
  
  createForm() {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    this.sent = true;
    const {firstname, lastname, email, message} = this.form.value;
    const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    let formRequest = { firstname, lastname, email, message, date, html };
    // this.db.list('/messages').push(formRequest);
     const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
      this.http.post('http://127.0.0.1:3000/sendmail', JSON.stringify(formRequest), {
      headers: headers
    })
    .subscribe(data => {
       if(data === '200'){
        //console.log(data);
       }
    });
    this.form.reset();
  }
}



