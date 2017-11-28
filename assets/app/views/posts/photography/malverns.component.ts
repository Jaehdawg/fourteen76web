import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-malverns',
  templateUrl: './templates/photography.component.html'
})

export class Malverns implements OnInit {
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

  postTitle = "The Malverns";
  postSubtitle = "Ted Homer";

  socials = [
    {
      description: "tedhomer.co.uk",
      url: "http://www.tedhomer.co.uk/",
      img: "/images/icons/website.png"
    },
    {
      description: "tedhomer1",
      url: "https://www.instagram.com/tedhomer1/",
      img: "/images/icons/insta.png"
    }
  ];

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'the_malverns.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'the_malverns.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/malverns/one.jpg',
      '/images/photography/malverns/two.jpg',
      '/images/photography/malverns/three.jpg',
      '/images/photography/malverns/four.jpg',
      '/images/photography/malverns/five.jpg',
      '/images/photography/malverns/six.jpg',
      '/images/photography/malverns/seven.jpg',
      '/images/photography/malverns/eight.jpg',
      '/images/photography/malverns/nine.jpg',
      '/images/photography/malverns/ten.jpg',
      '/images/photography/malverns/eleven.jpg',
      '/images/photography/malverns/twelve.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'TheMalverns';
  shareTitle: string = 'The%20Malverns';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
