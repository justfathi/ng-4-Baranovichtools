import { Routes, RouterModule } from '@angular/router';
import { MembershipComponent } from './membership.component';

const MEMBERSHIP_ROUTER: Routes = [
	{
		path: '',
		component: MembershipComponent
	}
];

export const membershipRouter = RouterModule.forChild(MEMBERSHIP_ROUTER);