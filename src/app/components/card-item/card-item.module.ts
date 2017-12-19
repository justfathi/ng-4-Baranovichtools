import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

// custom
import { CardItemComponent } from './card-item.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [ CardItemComponent ],
  declarations: [ CardItemComponent ]
})
export class CardItemModule { }