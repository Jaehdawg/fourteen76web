import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-blm',
  templateUrl: './templates/photography.component.html'
})

export class Blm implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = true;
  isphotoDescription: boolean = false;
  issocial: boolean = false;

  postTitle = "Black Lives Matter Birmingham";
  postSubtitle = "Mateo Montoya";


  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'blm.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'blm.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/blm/one.jpg',
      '/images/photography/blm/two.jpg',
      '/images/photography/blm/three.jpg',
      '/images/photography/blm/four.jpg',
      '/images/photography/blm/five.jpg',
      '/images/photography/blm/six.jpg',
      '/images/photography/blm/seven.jpg',
      '/images/photography/blm/eight.jpg',
      '/images/photography/blm/nine.jpg',
      '/images/photography/blm/ten.jpg',
      '/images/photography/blm/eleven.jpg',
      '/images/photography/blm/twelve.jpg',
      '/images/photography/blm/thirteen.jpg',
      '/images/photography/blm/fourteen.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'BLMProtest';
  shareTitle: string = 'Black%20Lives%20Matter%20Protest';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photojournalism, blm, blacklivesmatter";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
