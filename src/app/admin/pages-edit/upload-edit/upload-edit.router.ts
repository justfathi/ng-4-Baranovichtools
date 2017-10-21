import { Routes, RouterModule } from '@angular/router';
import { UploadEditComponent } from './upload-edit.component';

const UPLOAD_EDIT_ROUTER: Routes = [
	{
		path: '',
		component: UploadEditComponent
	}
];

export const uploadEditRouter = RouterModule.forChild(UPLOAD_EDIT_ROUTER);