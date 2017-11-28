import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Gaijin implements OnInit {
  isSlider: boolean = true;
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Artist Showcase`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Artist Showcase`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'gaijin.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Artist Showcase`},
      {name: 'twitter:image', content: global.shareImgUrl + 'gaijin.jpg'}
    ]);
  }

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/artists/gaijin/one.jpg',
      '/images/artists/gaijin/two.jpg',
      '/images/artists/gaijin/three.jpg',
      '/images/artists/gaijin/four.jpg',
      '/images/artists/gaijin/five.jpg',
      '/images/artists/gaijin/six.jpg',
      '/images/artists/gaijin/seven.jpg',
      '/images/artists/gaijin/eight.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);

  }

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = false;
  ispostSubtitlePhoto: boolean = false;
  ispostImage: boolean = false;
  isimageCaption: boolean = false;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = false;
  isqa1: boolean = false;
  isqa2: boolean = false;
  isphotoDescription: boolean = false;
  issocial: boolean = true;

  postTitle = 'Gaijin X';

  isSocial: boolean = true;
  socials = [
    {
      description: "gaijincollective.com",
      url: "https://www.gaijincollective.com/",
      img: "/images/icons/website.png"
    },
    {
      description: "gaijinisntphysical",
      url: "https://www.instagram.com/gaijinisntphysical/",
      img: "/images/icons/insta.png"
    }
  ];

  pageUrl: string = 'GaijinX';
  shareTitle: string = 'Gaijin%20X';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artist, coolart, creatives";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


}
