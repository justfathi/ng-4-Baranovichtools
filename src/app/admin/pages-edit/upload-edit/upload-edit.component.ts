import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,  AngularFireList } from 'angularfire2/database';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { UploadsService } from './upload-service/uploads.service';
import { ConfirmComponent } from '../../confirm/confirm.component';

@Component({
  selector: 'app-upload-edit',
  templateUrl: './upload-edit.component.html',
  styleUrls: ['./upload-edit.component.scss'],
  providers: [ UploadsService ]
})
export class UploadEditComponent {
  uploadsRef: AngularFireList<any>;
  images: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private _dialog: MatDialog, private upl: UploadsService) {
    this.uploadsRef = db.list('uploads');
    this.images = this.uploadsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }


   deleteFile(item) {
    let confirm = this._dialog.open(ConfirmComponent, { data: 'Yes'});
    confirm.afterClosed().subscribe(result => {
      console.log(result)
      if(result !== undefined) {
          if(result === 'Yes') this.upl.deleteUpload(item)
        }
    });
   }
}
