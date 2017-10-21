import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';

// custom
import { InstructionComponent } from './instruction.component';
import { instructionRouter } from './instruction.router';

@NgModule({
  imports: [
    instructionRouter,
    MdCardModule
  ],
  declarations: [ InstructionComponent ]
})
export class InstructionModule { }