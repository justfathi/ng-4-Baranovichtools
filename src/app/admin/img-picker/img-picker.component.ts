import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-img-picker',
  templateUrl: './img-picker.component.html',
  styleUrls: ['./img-picker.component.scss']
})
export class ImgPickerComponent {
  constructor(public imgPicker: MdDialogRef<ImgPickerComponent>, @Inject(MD_DIALOG_DATA) public data: any
  ) { }


  onNoClick(): void {
    this.imgPicker.close();
  }

}
