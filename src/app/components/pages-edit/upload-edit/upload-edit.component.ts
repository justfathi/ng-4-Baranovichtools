import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-upload-edit',
  templateUrl: './upload-edit.component.html',
  styleUrls: ['./upload-edit.component.scss']
})
export class UploadEditComponent implements OnInit {
  // images: Observable<any[]>;
  // constructor(private db: AngularFireDatabase) { this.images = db.list('uploads').valueChanges() }

  ngOnInit() {

  }

}
