import { Component, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { UploadsService } from '../upload-service/uploads.service';
import { Upload } from '../classes/upload';
// import * as _ from "lodash";

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss'],
  providers: [ UploadsService ]
})
export class UploadFormComponent {
  // custom
   @ViewChild('inputFile') nativeInputFile: ElementRef;
   
  // default
  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(private upSvc: UploadsService) { }
  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);
  }

  selectFile() {
        this.nativeInputFile.nativeElement.click();
  }

  // uploadMulti() {
  //  let files = this.selectedFiles
  //  let filesIndex = _.range(files.length)
  //  _.each(filesIndex, (idx) => {
  //    this.currentUpload = new Upload(files[idx]);
  //    this.upSvc.pushUpload(this.currentUpload)}
  //  )
  // }
}
