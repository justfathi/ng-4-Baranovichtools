import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';

const HELP_ROUTER: Routes = [
	{
		path: '',
		component: HelpComponent
	}
];

export const helpRouter = RouterModule.forChild(HELP_ROUTER);