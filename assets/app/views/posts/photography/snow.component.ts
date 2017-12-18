import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-snow',
  templateUrl: './templates/photography.component.html'
})

export class Snow implements OnInit {
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

  postTitle = "Snow Day";
  postSubtitle = "Mateo Montoya";


  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'snow.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'snow.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/snow/one.jpg',
      '/images/photography/snow/two.jpg',
      '/images/photography/snow/three.jpg',
      '/images/photography/snow/four.jpg',
      '/images/photography/snow/five.jpg',
      '/images/photography/snow/six.jpg',
      '/images/photography/snow/seven.jpg',
      '/images/photography/snow/eight.jpg',
      '/images/photography/snow/nine.jpg',
      '/images/photography/snow/ten.jpg',
      '/images/photography/snow/eleven.jpg',
      '/images/photography/snow/twelve.jpg',
      '/images/photography/snow/thirteen.jpg',
      '/images/photography/snow/fourteen.jpg',
      '/images/photography/snow/fifteen.jpg',
      '/images/photography/snow/sixteen.jpg',
      '/images/photography/snow/seventeen.jpg',
      '/images/photography/snow/nineteen.jpg',
      '/images/photography/snow/twenty.jpg',
      '/images/photography/snow/twentyone.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'Aerius';
  shareTitle: string = 'Aerius';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artist, coolart, creatives";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
