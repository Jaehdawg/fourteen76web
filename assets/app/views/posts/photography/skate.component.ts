import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-skate',
  templateUrl: './templates/photography.component.html'
})

export class Skate implements OnInit {
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

  postTitle = "Skate";
  postSubtitle = "David Sheetz";

  socials = [
    {
      description: "woodandwheels.tumblr",
      url: "https://woodandwheels.tumblr.com/",
      img: "/images/icons/website.png"
    }
  ];

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'skatedavid.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'skatedavid.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/skate/one.jpg',
      '/images/photography/skate/two.jpg',
      '/images/photography/skate/three.jpg',
      '/images/photography/skate/four.jpg',
      '/images/photography/skate/five.jpg',
      '/images/photography/skate/six.jpg',
      '/images/photography/skate/seven.jpg',
      '/images/photography/skate/eight.jpg',
      '/images/photography/skate/nine.jpg',
      '/images/photography/skate/ten.jpg',
      '/images/photography/skate/eleven.jpg',
      '/images/photography/skate/twelve.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'Skate';
  shareTitle: string = 'Skate';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
