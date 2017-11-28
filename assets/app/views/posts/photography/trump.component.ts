import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-trump',
  templateUrl: './templates/photography.component.html'
})

export class Trump implements OnInit {
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

  postTitle = "Rally Against Donald Trump";
  postSubtitle = "Mateo Montoya"

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'trump.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'trump.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/trump/one.jpg',
      '/images/photography/trump/two.jpg',
      '/images/photography/trump/three.jpg',
      '/images/photography/trump/four.jpg',
      '/images/photography/trump/five.jpg',
      '/images/photography/trump/six.jpg',
      '/images/photography/trump/seven.jpg',
      '/images/photography/trump/eight.jpg',
      '/images/photography/trump/nine.jpg',
      '/images/photography/trump/ten.jpg',
      '/images/photography/trump/eleven.jpg',
      '/images/photography/trump/twelve.jpg',
      '/images/photography/trump/thirteen.jpg',
      '/images/photography/trump/fourteen.jpg',
      '/images/photography/trump/fifteen.jpg',
      '/images/photography/trump/sixteen.jpg',
      '/images/photography/trump/seventeen.jpg',
      '/images/photography/trump/eighteen.jpg',
      '/images/photography/trump/nineteen.jpg',
      '/images/photography/trump/twenty.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'RallyAgainstTrump';
  shareTitle: string = 'Trump%20Protest';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
