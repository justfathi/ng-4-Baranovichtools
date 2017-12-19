import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule,  MatProgressBarModule } from '@angular/material';

// custom
import { UploadFormComponent } from './upload-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [ UploadFormComponent ],
  declarations: [ UploadFormComponent ]
})
export class UploadFormModule { }