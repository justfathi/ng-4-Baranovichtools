import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { MeetingsEditService } from '../meeting-edit-service/meetings-edit.service';
import { ImgPickerComponent } from '../../../img-picker/img-picker.component';

@Component({
  selector: 'meeting-edit-form',
  templateUrl: './meeting-edit-form.component.html',
  styleUrls: ['./meeting-edit-form.component.scss'],
  providers: [ MeetingsEditService ]
})
export class MeetingEditFormComponent implements OnInit {
  @Input() meeting: any;
  form: FormGroup;

  //img-picker-result
  result;

  //form
  id: string;
  order: number;
  avatar: string;
  title: string;
  subtitle: string;
  text: string;
  date;
  name: string;
  url: string;

  //data
  meetings;
  uploads; 

  constructor(
    private fb: FormBuilder, 
    private meetingsEditService: MeetingsEditService,
    private _dialog: MdDialog
    ) { 
  	this.createForm();
    this.uploads = this.meetingsEditService.getUploads();
  }

  ngOnInit(){
    if(this.meeting !== undefined) {
      this.id = this.meeting.key;
      this.order = this.meeting.order;
      this.avatar = this.meeting.avatar;
      this.title = this.meeting.title;
      this.subtitle = this.meeting.subtitle;
      this.text = this.meeting.text;
      this.name = this.meeting.name;
      this.date = new Date(this.meeting.date);
      this.url = this.meeting.url;
     }
  }

  // form
  createForm() {
      this.form = this.fb.group({
        order:     ['', Validators.required],
        avatar:    ['', Validators.required],
        title:     ['', Validators.required],
        subtitle:  ['', Validators.required],
        text:      ['', Validators.required],
        name:      ['', Validators.required],
        date:      ['', Validators.required],
        url:       ['', Validators.required],
     });
  }

  send() {
    //console.log()
    const date = this.form.value.date.toString();
    const { order, avatar, title, subtitle, text, name, url } = this.form.value;
    const toDb = { order, avatar, title, subtitle, text, name, date, url };
    if(this.meeting === undefined) {
       let id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
       this.meetingsEditService.toDb('meetings', id, toDb);
       this.form.reset();
    } else {
      let id = this.meeting.key;
      this.meetingsEditService.toDb('meetings', id, toDb);
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

  openAvatarPicker() {
    let imgPicker = this._dialog.open(ImgPickerComponent, { data: this.uploads || 'upss'});
    imgPicker.afterClosed().subscribe(result => {
      console.log(result)
      if(result !== undefined) {
          this.avatar = result.url;
      }
    });
  }
}