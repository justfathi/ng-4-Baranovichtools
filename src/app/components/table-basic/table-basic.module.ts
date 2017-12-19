import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

// custom
import { TableBasicComponent } from './table-basic.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [ TableBasicComponent ],
  declarations: [ TableBasicComponent ]
})
export class TableBasicModule { }