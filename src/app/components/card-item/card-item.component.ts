import { Component, Input } from '@angular/core';
import { AppService } from '../../main-services/app.service'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() dateText: string;
  @Input() item: any;
  constructor(private service: AppService) { this.service.addScript('share')}
}
