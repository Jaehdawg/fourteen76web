import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-gumbo',
  templateUrl: './templates/photography.component.html'
})

export class Gumbo implements OnInit {
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

  postTitle = "Gumbo Gala";
  postSubtitle = "Lee Panter"

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'gumbo.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'gumbo.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/gumbo/one.jpg',
      '/images/photography/gumbo/two.jpg',
      '/images/photography/gumbo/three.jpg',
      '/images/photography/gumbo/four.jpg',
      '/images/photography/gumbo/five.jpg',
      '/images/photography/gumbo/six.jpg',
      '/images/photography/gumbo/seven.jpg',
      '/images/photography/gumbo/eight.jpg',
      '/images/photography/gumbo/nine.jpg',
      '/images/photography/gumbo/ten.jpg',
      '/images/photography/gumbo/eleven.jpg',
      '/images/photography/gumbo/twelve.jpg',
      '/images/photography/gumbo/thirteen.jpg',
      '/images/photography/gumbo/fourteen.jpg',
      '/images/photography/gumbo/fifteen.jpg',
      '/images/photography/gumbo/sixteen.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'GumboGala';
  shareTitle: string = 'Gumbo%20Gala';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
