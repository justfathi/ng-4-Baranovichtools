import { NgModule } from '@angular/core';

// custom
import { HelpComponent } from './help.component';
import { helpRouter } from './help.router';

@NgModule({
  imports: [
    helpRouter,
  ],
  declarations: [ HelpComponent ]
})
export class HelpModule { }