import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-fashion',
  templateUrl: './templates/photography.component.html'
})

export class Fashion implements OnInit {
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

  postTitle = "Birmingham Fashion Week";
  postSubtitle = "Mateo Montoya";


  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'bfw.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'bfw.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/fashionweek/twelve.jpg',
      '/images/photography/fashionweek/one.jpg',
      '/images/photography/fashionweek/two.jpg',
      '/images/photography/fashionweek/three.jpg',
      '/images/photography/fashionweek/four.jpg',
      '/images/photography/fashionweek/five.jpg',
      '/images/photography/fashionweek/six.jpg',
      '/images/photography/fashionweek/thirteen.jpg',
      '/images/photography/fashionweek/fourteen.jpg',
      '/images/photography/fashionweek/fifteen.jpg',
      '/images/photography/fashionweek/sixteen.jpg',
      '/images/photography/fashionweek/seventeen.jpg',
      '/images/photography/fashionweek/eighteen.jpg',
      '/images/photography/fashionweek/nineteen.jpg',
      '/images/photography/fashionweek/twenty.jpg',
      '/images/photography/fashionweek/twentyone.jpg',
      '/images/photography/fashionweek/twentytwo.jpg',
      '/images/photography/fashionweek/twentythree.jpg',
      '/images/photography/fashionweek/twentyfour.jpg',
      '/images/photography/fashionweek/seven.jpg',
      '/images/photography/fashionweek/eight.jpg',
      '/images/photography/fashionweek/nine.jpg',
      '/images/photography/fashionweek/ten.jpg',
      '/images/photography/fashionweek/eleven.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'FashionWeek';
  shareTitle: string = 'Fashion%20Week';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
