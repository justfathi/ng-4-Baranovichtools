import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MdCardModule, 
  MdFormFieldModule,
  MdInputModule,
  MdButtonModule, 
  MdDatepickerModule, 
  MdNativeDateModule,
} from '@angular/material';

// custom
import { NewsEditFormComponent } from './news-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdFormFieldModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule
  ],
  exports: [ NewsEditFormComponent ],
  declarations: [ NewsEditFormComponent ]
})
export class NewsEditFormModule { }