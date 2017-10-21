import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history.component';

const HISTORY_ROUTER: Routes = [
	{
		path: '',
		component: HistoryComponent
	}
];

export const historyRouter = RouterModule.forChild(HISTORY_ROUTER);