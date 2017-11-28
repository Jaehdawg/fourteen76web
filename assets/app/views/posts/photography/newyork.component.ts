import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-newyork',
  templateUrl: './templates/photography.component.html'
})

export class NewYork implements OnInit {
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

  postTitle = "New York Perspectives";
  postSubtitle = "Victoria Vrublevska";

  socials = [
      {
        description: "victoriavrublevska.vimeo",
        url: "https://vimeo.com/victoriavrublevska",
        img: "/images/icons/website.png"
      },
      {
        description: "victoriavrublevska",
        url: "https://www.instagram.com/victoriavrublevska/",
        img: "/images/icons/insta.png"
      }
  ];

  description = [
    "'New York City Perspectives' is an attempt to capture cinematic qualities of New York - breathtaking perspectives, grand architecture and constant movement of the city that never sleeps."
  ]




  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'victoria.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'victoria.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/newyork/one.jpg',
      '/images/photography/newyork/two.jpg',
      '/images/photography/newyork/three.jpg',
      '/images/photography/newyork/four.jpg',
      '/images/photography/newyork/five.jpg',
      '/images/photography/newyork/seven.jpg',
      '/images/photography/newyork/eight.jpg',
      '/images/photography/newyork/nine.jpg',
      '/images/photography/newyork/ten.jpg',
      '/images/photography/newyork/eleven.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'NYPerspectives';
  shareTitle: string = 'NY%20Perspectivs';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
