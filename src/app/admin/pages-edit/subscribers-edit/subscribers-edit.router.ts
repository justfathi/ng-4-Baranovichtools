import { Routes, RouterModule } from '@angular/router';
import { SubscribersEditComponent } from './subscribers-edit.component';

const SUBSCRIBERS_EDIT_ROUTER: Routes = [
	{
		path: '',
		component: SubscribersEditComponent
	}
];

export const subscribersEditRouter = RouterModule.forChild(SUBSCRIBERS_EDIT_ROUTER);