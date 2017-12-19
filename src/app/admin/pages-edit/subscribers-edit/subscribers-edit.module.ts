import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatExpansionModule,  MatCheckboxModule, MatInputModule, MatButtonModule } from '@angular/material';
// custom
import { SubscribersEditComponent } from './subscribers-edit.component';
import { subscribersEditRouter } from './subscribers-edit.router';

@NgModule({
  imports: [
    CommonModule,
    subscribersEditRouter,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  declarations: [ SubscribersEditComponent ]
})
export class SubscribersEditModule { }
