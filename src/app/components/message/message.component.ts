import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    let formRequest = { firstname, lastname, email, message };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.http.post('/assets/email.php', JSON.stringify(formRequest), {
      headers: headers,
      responseType: 'text'
    })
    .subscribe(data => {

    });
    this.form.reset();
  }
}
