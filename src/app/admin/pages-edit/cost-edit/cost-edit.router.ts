import { Routes, RouterModule } from '@angular/router';
import { CostEditComponent } from './cost-edit.component';

const COST_EDIT_ROUTER: Routes = [
	{
		path: '',
		component: CostEditComponent
	}
];

export const costEditRouter = RouterModule.forChild(COST_EDIT_ROUTER);