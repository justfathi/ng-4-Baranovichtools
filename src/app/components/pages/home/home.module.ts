import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTooltipModule } from '@angular/material';

// custom
import { MeetingsWindowModule } from '../../meetings-window/meetings-window.module';
import { MapsAllModule } from '../../maps-all/maps-all.module';
import { TableBasicModule } from '../../table-basic/table-basic.module';
import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';

@NgModule({
  imports: [
    CommonModule,
    homeRouter,
    MatButtonModule,
    MapsAllModule,
    TableBasicModule,
    MeetingsWindowModule,
    MatTooltipModule,
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }