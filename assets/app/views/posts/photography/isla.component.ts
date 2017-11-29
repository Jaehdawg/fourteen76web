import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-isla',
  templateUrl: './templates/photography.component.html'
})

export class Isla implements OnInit {
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
  isphotoDescription: boolean = true;
  issocial: boolean = true;

  postTitle = "Isla De Magia";
  postSubtitle = "Camila Escobar";

  description = [
    "I've been to Providencia twice, each time has been different, but what has remained is the magic that lives within. Here is a small selection of photographs that I took around this timeless and enchanting place."
  ]

  socials = [
    {
      description: 'camilaescobarphotography.com',
      url: 'http://camilaescobarphotography.com/',
      img: '/images/icons/website.png'
    },
    {
      description: 'cescobarll',
      url: 'https://www.instagram.com/cescobarll/',
      img: '/images/icons/insta.png'
    }
  ]

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'magia.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'magia.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/isla/one.jpg',
      '/images/photography/isla/two.jpg',
      '/images/photography/isla/three.jpg',
      '/images/photography/isla/four.jpg',
      '/images/photography/isla/five.jpg',
      '/images/photography/isla/seven.jpg',
      '/images/photography/isla/eight.jpg',
      '/images/photography/isla/nine.jpg',
      '/images/photography/isla/ten.jpg',
      '/images/photography/isla/eleven.jpg',
      '/images/photography/isla/twelve.jpg',
      '/images/photography/isla/thirteen.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'IslaDeMagia';
  shareTitle: string = 'Isla%20De%20Magia';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
