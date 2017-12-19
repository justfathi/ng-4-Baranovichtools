import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatButtonModule } from '@angular/material';
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
    MatButtonModule
  ],
  declarations: [ UploadEditComponent ]
})
export class UploadEditModule { }