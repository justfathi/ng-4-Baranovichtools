import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { NewsEditService } from '../news-edit-service/news-edit.service';
import { ImgPickerComponent } from '../../../img-picker/img-picker.component';

@Component({
  selector: 'news-edit-form',
  templateUrl: './news-edit-form.component.html',
  styleUrls: ['./news-edit-form.component.scss'],
  providers: [ NewsEditService ]
})
export class NewsEditFormComponent implements OnInit {
  @Input() article: any;
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
  news;
  uploads; 

  constructor(
    private fb: FormBuilder, 
    private newsEditService: NewsEditService,
    private _dialog: MatDialog
    ) { 
  	this.createForm();
    this.uploads = this.newsEditService.getUploads();
  }

  ngOnInit(){
    if(this.article !== undefined) {
      this.id = this.article.key;
      this.order = this.article.order;
      this.avatar = this.article.avatar;
      this.title = this.article.title;
      this.subtitle = this.article.subtitle;
      this.text = this.article.text;
      this.name = this.article.name;
      this.date = new Date(this.article.date);
      this.url = this.article.url;
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
    const toDb = {order, avatar, title, subtitle, text, name, date, url };
    if(this.article === undefined) {
       let id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
       this.newsEditService.toDb('news', id, toDb);
       this.form.reset();
    } else {
      let id = this.article.key;
      this.newsEditService.toDb('news', id, toDb);
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