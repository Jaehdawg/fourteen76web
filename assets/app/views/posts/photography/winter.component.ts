import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-winter',
  templateUrl: './templates/photography.component.html'
})

export class Winter implements OnInit {
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
        description: 'thecalliefox',
        url: 'https://www.instagram.com/thecalliefox/',
        img: '/images/icons/insta.png'
      }
  ]

  postTitle = "Wisconsin Winter";
  postSubtitle = "Callie Mills";

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'callie.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'callie.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/wisconsin/one.jpg',
      '/images/photography/wisconsin/two.jpg',
      '/images/photography/wisconsin/three.jpg',
      '/images/photography/wisconsin/four.jpg',
      '/images/photography/wisconsin/five.jpg',
      '/images/photography/wisconsin/six.jpg',
      '/images/photography/wisconsin/seven.jpg',
      '/images/photography/wisconsin/eight.jpg',
      '/images/photography/wisconsin/nine.jpg',
      '/images/photography/wisconsin/ten.jpg',
      '/images/photography/wisconsin/eleven.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'WisconsinWinter';
  shareTitle: string = 'Wisconsin%20Winter';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
