import { NgModule } from '@angular/core';

// custom
import { HistoryComponent } from './history.component';
import { historyRouter } from './history.router';

@NgModule({
  imports: [
    historyRouter,
  ],
  declarations: [ HistoryComponent ]
})
export class HistoryModule { }