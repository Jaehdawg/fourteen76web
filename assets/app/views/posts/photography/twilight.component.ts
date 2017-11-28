import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-twilight',
  templateUrl: './templates/photography.component.html'
})

export class Twilight implements OnInit {
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
  issocial: boolean = true;

  postTitle = "Twilight Children";
  postSubtitle = "Chris Berntsen";

  socials = [
      {
        description: 'chrisberntsen.com',
        url: 'http://chrisberntsen.com/',
        img: '/images/icons/website.png'
      },
      {
        description: 'chris.berntsen',
        url: 'https://www.instagram.com/chris.berntsen/',
        img: '/images/icons/insta.png'
      },
  ]

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'chris.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'chris.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/twilight/one.jpg',
      '/images/photography/twilight/two.jpg',
      '/images/photography/twilight/three.jpg',
      '/images/photography/twilight/four.jpg',
      '/images/photography/twilight/five.jpg',
      '/images/photography/twilight/seven.jpg',
      '/images/photography/twilight/eight.jpg',
      '/images/photography/twilight/nine.jpg',
      '/images/photography/twilight/ten.jpg',
      '/images/photography/twilight/eleven.jpg',
      '/images/photography/twilight/twelve.jpg',
      '/images/photography/twilight/thirteen.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'TwilightChildren';
  shareTitle: string = 'Twilight%20Children';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
