import { Routes, RouterModule } from '@angular/router';
import { InstructionComponent } from './instruction.component';

const INSTRUCTION_ROUTER: Routes = [
	{
		path: '',
		component: InstructionComponent
	}
];

export const instructionRouter = RouterModule.forChild(INSTRUCTION_ROUTER);