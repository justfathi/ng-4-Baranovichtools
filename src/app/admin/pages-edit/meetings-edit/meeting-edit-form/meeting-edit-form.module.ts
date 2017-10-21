import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MdFormFieldModule, 
  MdInputModule,
  MdButtonModule, 
  MdDatepickerModule, 
  MdCardModule,  
  MdNativeDateModule, 
} from '@angular/material';

// custom
import { MeetingEditFormComponent } from './meeting-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdFormFieldModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule
  ],
  exports: [ MeetingEditFormComponent ],
  declarations: [ MeetingEditFormComponent ]
})
export class MeetingEditFormModule { }