import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
// custom
import { CostEditComponent } from './cost-edit.component';
import { costEditRouter } from './cost-edit.router';

@NgModule({
  imports: [
    costEditRouter,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule, 
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [ CostEditComponent ]
})
export class CostEditModule { }