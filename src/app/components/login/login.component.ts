import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  // dell after work
  login = 'tlbaranovichytools@gmail.com';
  pass = 'b4sdr126ggt86'

  form: FormGroup;
  sent: boolean;

  constructor(private fb: FormBuilder, private auth: AuthService) { 
  	this.createForm();
    this.sent = false;
  }
  
  createForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.sent = true;
    const { email, password } = this.form.value;
    this.auth.signInWithEmailAndPassword(email, password);
  }
}
