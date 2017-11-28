import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-fiesta',
  templateUrl: './templates/photography.component.html'
})

export class Fiesta implements OnInit {
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

  postTitle = "Fiesta Birmingham 2016";
  postSubtitle = "Mateo Montoya";


  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'fiesta.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'fiesta.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/fiesta/one.jpg',
      '/images/photography/fiesta/two.jpg',
      '/images/photography/fiesta/three.jpg',
      '/images/photography/fiesta/four.jpg',
      '/images/photography/fiesta/five.jpg',
      '/images/photography/fiesta/six.jpg',
      '/images/photography/fiesta/seven.jpg',
      '/images/photography/fiesta/eight.jpg',
      '/images/photography/fiesta/nine.jpg',
      '/images/photography/fiesta/ten.jpg',
      '/images/photography/fiesta/eleven.jpg',
      '/images/photography/fiesta/twelve.jpg',
      '/images/photography/fiesta/thirteen.jpg',
      '/images/photography/fiesta/fourteen.jpg',
      '/images/photography/fiesta/fifteen.jpg',
      '/images/photography/fiesta/sixteen.jpg',
      '/images/photography/fiesta/seventeen.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'FiestaBham';
  shareTitle: string = 'Fiesta%20Bham';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory, fiestabham";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
