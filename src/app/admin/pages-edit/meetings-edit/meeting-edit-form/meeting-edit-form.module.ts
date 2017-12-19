import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatFormFieldModule, 
  MatInputModule,
  MatButtonModule, 
  MatDatepickerModule, 
  MatCardModule,  
  MatNativeDateModule, 
} from '@angular/material';

// custom
import { MeetingEditFormComponent } from './meeting-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [ MeetingEditFormComponent ],
  declarations: [ MeetingEditFormComponent ]
})
export class MeetingEditFormModule { }