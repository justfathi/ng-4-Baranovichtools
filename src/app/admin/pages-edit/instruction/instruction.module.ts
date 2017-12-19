import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

// custom
import { InstructionComponent } from './instruction.component';
import { instructionRouter } from './instruction.router';

@NgModule({
  imports: [
    instructionRouter,
    MatCardModule
  ],
  declarations: [ InstructionComponent ]
})
export class InstructionModule { }