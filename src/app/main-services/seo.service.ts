import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta) { }
  generateTags(config) {
  	config = {
  		title: "",
  		description: "",
  		slug: "",
  		...config
  	}
    this.meta.updateTag({name: 'description', content: config.description });
  	this.meta.updateTag({property: 'og:title', content: config.title});
  	this.meta.updateTag({property: 'og:description', content: config.description});
  	this.meta.updateTag({property: 'og:url', content: `https://baranovichytools.ru/${config.slug}`});
  }
}
