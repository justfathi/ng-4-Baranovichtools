import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-subscribers-edit',
  templateUrl: './subscribers-edit.component.html',
  styleUrls: ['./subscribers-edit.component.scss']
})
export class SubscribersEditComponent implements OnInit{
  // form
  form: FormGroup;
  sent: boolean;

  //checkbox
  arrOfEmails = [];
  itemSelect = true;

   // subscribers
  arrEmailsRef: AngularFireObject<any>;
  subscribersRef: AngularFireList<any>;
  subscribers: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private fb: FormBuilder, private http: HttpClient) {
    this.createForm();
    this.sent = false;
   	this.subscribersRef = db.list('subscribers');
    this.subscribers = this.subscribersRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit(){
    this.arrEmailsRef = this.db.object('subscribers');
    this.getArrOfEmails()
  }


  createForm() {
    this.form = this.fb.group({
       message: ['', Validators.required],
       link: [],
    });
  }

  onSubmit() {
    this.sent = true;
    const {  message, link } = this.form.value;
    const mails = this.arrOfEmails.join(',');
    let formRequest = { mails, message, link };
    //console.log(JSON.stringify(formRequest));
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    if(this.arrOfEmails !== []) {
          this.http.post('/assets/emails.php', JSON.stringify(formRequest), {
      headers: headers,
      responseType: 'text'
    })
    .subscribe(data => {});
    this.form.reset();
    setTimeout(() => this.sent = false, 5000);
    }
  }

  // add all emails
  forEachCheckBox() {
    this.itemSelect? this.arrOfEmails = [] : this.getArrOfEmails(); 
  }


  getArrOfEmails() {
      this.arrEmailsRef.snapshotChanges().subscribe(action => {
        this.arrOfEmails = [];
        for (var key in action.payload.val()) {
            if (action.payload.val().hasOwnProperty(key)) {
              this.arrOfEmails.push(action.payload.val()[key].email);
          }
        }
      });
  }

  selectEmail(e) {
    if(e.checked) {
      this.arrOfEmails.push(e.source.value) 
    } else {
      this.arrOfEmails.splice(this.arrOfEmails.indexOf(e.source.value), 1)
    }
  }
}
