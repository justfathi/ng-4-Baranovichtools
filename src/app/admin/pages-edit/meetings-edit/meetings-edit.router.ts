import { Routes, RouterModule } from '@angular/router';
import { MeetingsEditComponent } from './meetings-edit.component';

const MEETINGS_EDIT_ROUTER: Routes = [
	{
		path: '',
		component: MeetingsEditComponent
	}
];

export const meetingsEditRouter = RouterModule.forChild(MEETINGS_EDIT_ROUTER);