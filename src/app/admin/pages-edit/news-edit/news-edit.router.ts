import { Routes, RouterModule } from '@angular/router';
import { NewsEditComponent } from './news-edit.component';

const NEWS_EDIT_ROUTER: Routes = [
	{
		path: '',
		component: NewsEditComponent
	}
];

export const newsEditRouter = RouterModule.forChild(NEWS_EDIT_ROUTER);