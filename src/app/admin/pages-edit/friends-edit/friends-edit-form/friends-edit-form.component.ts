import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { FriendsEditService } from '../friends-edit-service/friends-edit.service';
import { ImgPickerComponent } from '../../../img-picker/img-picker.component';
 
@Component({
  selector: 'friends-edit-form',
  templateUrl: './friends-edit-form.component.html',
  styleUrls: ['./friends-edit-form.component.scss'],
  providers: [ FriendsEditService ]
})
export class FriendsEditFormComponent {
  @Input() friend: any;
  form: FormGroup;

  //img-picker-result
  result;

  //form
  id: string;
  order: number;
  title: string;
  name: string;
  link: string;
  url: string;

  //data
  friends;
  uploads; 

  constructor(
    private fb: FormBuilder, 
    private friendsEditService: FriendsEditService,
    private _dialog: MatDialog
    ) { 
  	this.createForm();
    this.uploads = this.friendsEditService.getUploads();
  }

  ngOnInit(){
    if(this.friend !== undefined) {
      this.id = this.friend.key;
      this.order = this.friend.order;
      this.title = this.friend.title;
      this.name = this.friend.name;
      this.link = this.friend.link;
      this.url = this.friend.url;
    }
    
  }

  // form
  createForm() {
      this.form = this.fb.group({
        order: ['', Validators.required],
        title: ['', Validators.required],
        link:  ['', Validators.required],
        name:  ['', Validators.required],
        url:   ['', Validators.required],
     });
  }

  send() {
    const { order, title, link, name, url } = this.form.value;
    const toDb = { order, title, link, name, url };
    if(this.friend === undefined) {
       let id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
       this.friendsEditService.toDb('friends', id, toDb);
       this.form.reset();
    } else {
      let id = this.friend.key;
      this.friendsEditService.toDb('friends', id, toDb);
    }
  }

  // open dialog
  openImgPicker() {
    let imgPicker = this._dialog.open(ImgPickerComponent, { data: this.uploads || 'upss'});
    imgPicker.afterClosed().subscribe(result => {
      console.log(result)
      if(result !== undefined) {
          this.name = result.name;
          this.url = result.url;
      }
    });

  }

}
