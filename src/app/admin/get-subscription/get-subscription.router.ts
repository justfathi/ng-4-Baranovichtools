import { Routes, RouterModule } from '@angular/router';
import { GetSubscriptionComponent } from './get-subscription.component';

const GET_SUBSCRIPTION_ROUTER: Routes = [
	{
		path: '',
		component: GetSubscriptionComponent
	}
];

export const getSubscriptionRouter = RouterModule.forChild(GET_SUBSCRIPTION_ROUTER);