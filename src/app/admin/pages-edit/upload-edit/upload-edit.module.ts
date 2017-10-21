import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MdButtonModule } from '@angular/material';
// custom
import { UploadEditComponent } from './upload-edit.component';
import { UploadFormModule } from './upload-form/upload-form.module';
import { uploadEditRouter } from './upload-edit.router';

@NgModule({
  imports: [
    uploadEditRouter,
    CommonModule,
    MatExpansionModule,
    UploadFormModule,
    MdButtonModule
  ],
  declarations: [ UploadEditComponent ]
})
export class UploadEditModule { }