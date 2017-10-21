import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';

// custom
import { CardItemComponent } from './card-item.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule
  ],
  exports: [ CardItemComponent ],
  declarations: [ CardItemComponent ]
})
export class CardItemModule { }