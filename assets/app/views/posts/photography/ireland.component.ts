import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-ireland',
  templateUrl: './templates/photography.component.html'
})

export class Ireland implements OnInit {
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

  postTitle = "Ireland";
  postSubtitle = "Rachel McElroy";

  socials = [
    {
      description: 'rachelmcelroy.com',
      url: 'https://www.rachelmcelroy.com/',
      img: '/images/icons/website.png'
    },
    {
      description: 'preraphaelite',
      url: 'https://www.instagram.com/preraphaelite/',
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
      {property: 'og:image', content: global.shareImgUrl + 'ireland.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'ireland.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/ireland/one.jpg',
      '/images/photography/ireland/two.jpg',
      '/images/photography/ireland/three.jpg',
      '/images/photography/ireland/four.jpg',
      '/images/photography/ireland/five.jpg',
      '/images/photography/ireland/seven.jpg',
      '/images/photography/ireland/eight.jpg',
      '/images/photography/ireland/nine.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'Ireland';
  shareTitle: string = 'Ireland';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
