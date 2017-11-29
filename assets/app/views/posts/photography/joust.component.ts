import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-joust',
  templateUrl: './templates/photography.component.html'
})

export class BikeJoust implements OnInit {
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

  postTitle = "Bike Joust V";
  postSubtitle = "Mateo Montoya"

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'bikejoust.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'bikejoust.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/joust/one.jpg',
      '/images/photography/joust/two.jpg',
      '/images/photography/joust/three.jpg',
      '/images/photography/joust/four.jpg',
      '/images/photography/joust/five.jpg',
      '/images/photography/joust/six.jpg',
      '/images/photography/joust/seven.jpg',
      '/images/photography/joust/eigth.jpg',
      '/images/photography/joust/nine.jpg',
      '/images/photography/joust/ten.jpg',
      '/images/photography/joust/eleven.jpg',
      '/images/photography/joust/twelve.jpg',
      '/images/photography/joust/thirteen.jpg',
      '/images/photography/joust/fourteen.jpg',
      '/images/photography/joust/fifteen.jpg',
      '/images/photography/joust/sixteen.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);

  }

  pageUrl: string = 'BikeJoustV';
  shareTitle: string = 'Bike%20Joust%20V';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
