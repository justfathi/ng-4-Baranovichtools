import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material';

// custom
import { FriendsComponent } from './friends.component';
import { friendsRouter } from './friends.router';

@NgModule({
  imports: [
    CommonModule,
    friendsRouter,
    MatProgressBarModule,
  ],
  declarations: [ FriendsComponent ]
})
export class FriendsModule { }