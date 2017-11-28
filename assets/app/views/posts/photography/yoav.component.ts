import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-yoav',
  templateUrl: './templates/photography.component.html'
})

export class Yoav implements OnInit {
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

  socials = [
      {
        description: 'pelliyoav',
        url: 'https://www.instagram.com/pelliyoav/',
        img: '/images/icons/insta.png'
      }
  ]

  postTitle = "Yoav Pelli";
  postSubtitle = "Photo Story";

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'yoav.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'yoav.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
    this.images = [
      '/images/photography/yoav/one.jpg',
      '/images/photography/yoav/two.jpg',
      '/images/photography/yoav/three.jpg',
      '/images/photography/yoav/four.jpg',
      '/images/photography/yoav/five.jpg',
      '/images/photography/yoav/six.jpg',
      '/images/photography/yoav/seven.jpg',
      '/images/photography/yoav/eight.jpg',
      '/images/photography/yoav/nine.jpg'
    ];
  }

  pageUrl: string = 'YoavPelli';
  shareTitle: string = 'Yoav%20Pelli';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artist, coolart, creatives";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
