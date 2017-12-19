import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-cost-edit',
  templateUrl: './cost-edit.component.html',
  styleUrls: ['./cost-edit.component.scss']
})
export class CostEditComponent implements OnInit{
  //form
  form: FormGroup;
  sent: boolean;

  //subscr
  costRef: AngularFireObject<any>;
  arrCost = [];

  //var
  a; b; c; d;

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
  	this.costRef = db.object('cost');
    this.createForm();
    this.sent = false;
  }
  
  ngOnInit(){
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

  createForm() {
    this.form = this.fb.group({
      a: ['', Validators.required],
      b: ['', Validators.required],
      c: ['', Validators.required],
      d: ['', Validators.required],
    });
  }

   onSubmit() {
    this.sent = true;
    const {a, b, c, d} = this.form.value;
    const toDb = { a, b, c, d };
    this.costRef.set(toDb);
    this.sent = true;
    setTimeout(()=>this.sent = false, 3000)
  }
}
