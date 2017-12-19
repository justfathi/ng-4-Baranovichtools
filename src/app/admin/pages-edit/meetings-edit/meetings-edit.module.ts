import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatButtonModule } from '@angular/material';
// custom
import { MeetingsEditComponent } from './meetings-edit.component';
import { MeetingEditFormModule } from './meeting-edit-form/meeting-edit-form.module';
import { meetingsEditRouter } from './meetings-edit.router';

@NgModule({
  imports: [
    meetingsEditRouter,
    CommonModule,
    MatExpansionModule,
    MeetingEditFormModule,
    MatButtonModule,
  ],
  declarations: [ MeetingsEditComponent ]
})
export class MeetingsEditModule { }