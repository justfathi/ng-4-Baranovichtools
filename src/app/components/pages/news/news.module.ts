import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material';

// custom
import { CardItemModule } from '../../card-item/card-item.module';
import { NewsComponent } from './news.component';
import { newsRouter } from './news.router';

@NgModule({
  imports: [
    CommonModule,
    newsRouter,
    MatProgressBarModule,
    CardItemModule
  ],
  declarations: [ NewsComponent ]
})
export class NewsModule { }
