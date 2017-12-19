import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatButtonModule } from '@angular/material';
// custom
import { NewsEditComponent } from './news-edit.component';
import { NewsEditFormModule } from './news-edit-form/news-edit-form.module';
import { newsEditRouter } from './news-edit.router';

@NgModule({
  imports: [
    newsEditRouter,
    CommonModule,
    MatExpansionModule,
    NewsEditFormModule,
    MatButtonModule
  ],
  declarations: [ NewsEditComponent ]
})
export class NewsEditModule { }