import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../main-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  hide = true;
  brootforce = 0;
  subscribeAdmin;
  form: FormGroup;
  sent: boolean;

  constructor(private fb: FormBuilder, public auth: AuthService) { 
    this.subscribeAdmin = this.auth.subscribeAdmin.subscribe(value => {
      this.sent = value
    })
  	this.createForm();
  }
  
  createForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.brootforce++;
    const { email, password } = this.form.value;
    if( this.brootforce < 7) {
      this.auth.signInWithEmailAndPassword(email, password);
    } 
  }
}
