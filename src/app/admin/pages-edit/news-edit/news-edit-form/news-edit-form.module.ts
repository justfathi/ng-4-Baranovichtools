import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatCardModule, 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule, 
  MatDatepickerModule, 
  MatNativeDateModule,
} from '@angular/material';

// custom
import { NewsEditFormComponent } from './news-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [ NewsEditFormComponent ],
  declarations: [ NewsEditFormComponent ]
})
export class NewsEditFormModule { }