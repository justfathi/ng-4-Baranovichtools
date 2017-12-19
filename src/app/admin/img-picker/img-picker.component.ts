import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-img-picker',
  templateUrl: './img-picker.component.html',
  styleUrls: ['./img-picker.component.scss']
})
export class ImgPickerComponent {
  constructor(public imgPicker: MatDialogRef<ImgPickerComponent>, @Inject(MAT_DIALOG_DATA) public data: string
  ) { }


  onNoClick(): void {
    this.imgPicker.close();
  }

}
