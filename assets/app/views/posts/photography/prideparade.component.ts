import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-pride',
  templateUrl: './templates/photography.component.html'
})

export class PrideParade implements OnInit {
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

  postTitle = "Pride Parade and Fest";
  postSubtitle = "Mateo Montoya";


  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'prideparade.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'prideparade.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/pride/one.jpg',
      '/images/photography/pride/two.jpg',
      '/images/photography/pride/three.jpg',
      '/images/photography/pride/four.jpg',
      '/images/photography/pride/five.jpg',
      '/images/photography/pride/six.jpg',
      '/images/photography/pride/seven.jpg',
      '/images/photography/pride/eight.jpg',
      '/images/photography/pride/nine.jpg',
      '/images/photography/pride/ten.jpg',
      '/images/photography/pride/eleven.jpg',
      '/images/photography/pride/twelve.jpg',
      '/images/photography/pride/thirteen.jpg',
      '/images/photography/pride/fourteen.jpg',
      '/images/photography/pride/fifteen.jpg',
      '/images/photography/pride/sixteen.jpg',
      '/images/photography/pride/seventeen.jpg',
      '/images/photography/pride/eighteen.jpg',
      '/images/photography/pride/nineteen.jpg',
      '/images/photography/pride/twenty.jpg',
      '/images/photography/pride/twentyone.jpg',
      '/images/photography/pride/twentytwo.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'PrideParade';
  shareTitle: string = 'Pride%20Parade';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory, lgtbq, prideparade";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
