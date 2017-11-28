import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-cycle',
  templateUrl: './templates/photography.component.html'
})

export class CycleFest implements OnInit {
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

  postTitle = "Cycle Fest 2016";
  postSubtitle = "Mateo Montoya";


  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'cyclefest.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'cyclefest.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/cyclefest/one.jpg',
      '/images/photography/cyclefest/two.jpg',
      '/images/photography/cyclefest/three.jpg',
      '/images/photography/cyclefest/four.jpg',
      '/images/photography/cyclefest/five.jpg',
      '/images/photography/cyclefest/six.jpg',
      '/images/photography/cyclefest/seven.jpg',
      '/images/photography/cyclefest/eight.jpg',
      '/images/photography/cyclefest/ten.jpg',
      '/images/photography/cyclefest/twelve.jpg',
      '/images/photography/cyclefest/thirteen.jpg',
      '/images/photography/cyclefest/seventeen.jpg',
      '/images/photography/cyclefest/eighteen.jpg',
      '/images/photography/cyclefest/nineteen.jpg',
      '/images/photography/cyclefest/twenty.jpg',
      '/images/photography/cyclefest/nine.jpg',
      '/images/photography/cyclefest/fourteen.jpg',
      '/images/photography/cyclefest/fifteen.jpg',
      '/images/photography/cyclefest/sixteen.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'Cyclefest16';
  shareTitle: string = 'Cycle%20Fest';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
