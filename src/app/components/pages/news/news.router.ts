import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';

const NEWS_ROUTER: Routes = [
	{
		path: '',
		component: NewsComponent
	}
];

export const newsRouter = RouterModule.forChild(NEWS_ROUTER);
