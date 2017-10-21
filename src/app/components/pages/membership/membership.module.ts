import { NgModule } from '@angular/core';

// custom
import { MembershipComponent } from './membership.component';
import { membershipRouter } from './membership.router';

@NgModule({
  imports: [
    membershipRouter,
  ],
  declarations: [ MembershipComponent ]
})
export class MembershipModule { }