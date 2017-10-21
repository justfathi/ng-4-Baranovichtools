import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MdButtonModule } from '@angular/material';
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
    MdButtonModule
  ],
  declarations: [ NewsEditComponent ]
})
export class NewsEditModule { }