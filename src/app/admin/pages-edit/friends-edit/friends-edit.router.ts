import { Routes, RouterModule } from '@angular/router';
import { FriendsEditComponent } from './friends-edit.component';

const FRIENDS_EDIT_ROUTER: Routes = [
	{
		path: '',
		component: FriendsEditComponent
	}
];

export const friendsEditRouter = RouterModule.forChild(FRIENDS_EDIT_ROUTER);