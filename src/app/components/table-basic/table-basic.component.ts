import { Component } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.scss']
})
export class TableBasicComponent {
   displayedColumns = ['day', 'time'];
   dataSource = new ExampleDataSource();
}

export interface Element {
  day: string;
  time: string;
}

const data: Element[] = [
  {day: 'Понедельник', time: 'Закрыты'},
  {day: 'Вторник', time: '17:30 - 20:00 (+03:00)'},
  {day: 'Среда', time: '17:30 - 20:00 (+03:00)'},
  {day: 'Четверг', time: '17:30 - 20:00 (+03:00)'},
  {day: 'Пятница', time: '17:30 - 20:00 (+03:00)'},
  {day: 'Суббота', time: '10:00 - 14:30 (+03:00)'},
  {day: 'Воскресенье', time: '12:00 - 14:30 (+03:00)'},
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}
