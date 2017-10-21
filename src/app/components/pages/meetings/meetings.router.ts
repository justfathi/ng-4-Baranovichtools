import { Routes, RouterModule } from '@angular/router';
import { MeetingsComponent } from './meetings.component';

const MEETINGS_ROUTER: Routes = [
	{
		path: '',
		component: MeetingsComponent
	}
];

export const meetingsRouter = RouterModule.forChild(MEETINGS_ROUTER);