import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatButtonModule } from '@angular/material';
// custom
import { FriendsEditComponent } from './friends-edit.component';
import { FriendsEditFormModule } from './friends-edit-form/friends-edit-form.module';
import { friendsEditRouter } from './friends-edit.router';

@NgModule({
  imports: [
    friendsEditRouter,
    CommonModule,
    MatExpansionModule,
    FriendsEditFormModule,
    MatButtonModule,
  ],
  declarations: [ FriendsEditComponent ]
})
export class FriendsEditModule { }