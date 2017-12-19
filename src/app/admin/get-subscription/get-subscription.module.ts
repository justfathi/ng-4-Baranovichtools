import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
// custom
import { GetSubscriptionComponent } from './get-subscription.component';
import { getSubscriptionRouter } from './get-subscription.router';

@NgModule({
  imports: [
    getSubscriptionRouter,
    CommonModule,
    MatCardModule,
  ],
  declarations: [ GetSubscriptionComponent ]
})
export class GetSubscriptionModule { }