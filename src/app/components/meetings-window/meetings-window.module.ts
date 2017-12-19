import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatTooltipModule } from '@angular/material';

// custom
import { MeetingsWindowComponent } from './meetings-window.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [ MeetingsWindowComponent ],
  declarations: [ MeetingsWindowComponent ]
})
export class MeetingsWindowModule { }