import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-die',
  templateUrl: './templates/photography.component.html'
})

export class DieTrying implements OnInit {
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

  postTitle = "DIE TRYING";
  postSubtitle = "sniperstreets";
  description = [
    "Zero Skate Team's United States of Whatever summer tour stop, in Birmingham, AL on July 25, 2017. The entire 3 part series can be viewed"
  ]
  socials = [
    {
      description: "sniperstreets.com",
      url: "https://www.sniperstreets.com/",
      img: "/images/icons/website.png"
    },
    {
      description: "sniperstreets",
      url: "https://www.instagram.com/sniperstreets/",
      img: "/images/icons/insta.png"
    }
  ];

  metaDescription = this.description.toString();

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: this.metaDescription},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: this.metaDescription},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'zero.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: this.metaDescription},
      {name: 'twitter:image', content: global.shareImgUrl + 'zero.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/dietrying/one.jpg',
      '/images/photography/dietrying/two.jpg',
      '/images/photography/dietrying/three.jpg',
      '/images/photography/dietrying/four.jpg',
      '/images/photography/dietrying/five.jpg',
      '/images/photography/dietrying/six.jpg',
      '/images/photography/dietrying/seven.jpg',
      '/images/photography/dietrying/eight.jpg',
      '/images/photography/dietrying/nine.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'DieTrying';
  shareTitle: string = 'Die%20Trying';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory, photography";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
