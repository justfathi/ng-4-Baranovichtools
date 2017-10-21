import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends.component';

const FRIENDS_ROUTER: Routes = [
	{
		path: '',
		component: FriendsComponent
	}
];

export const friendsRouter = RouterModule.forChild(FRIENDS_ROUTER);