import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material';
import { CardItemModule } from '../../card-item/card-item.module';

// custom
import { MeetingsComponent } from './meetings.component';
import { meetingsRouter } from './meetings.router';

@NgModule({
  imports: [
    CommonModule,
    meetingsRouter,
    MatProgressBarModule,
    CardItemModule
  ],
  declarations: [ MeetingsComponent ]
})
export class MeetingsModule { }
