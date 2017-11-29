import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Amy implements OnInit {
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
      {property: 'og:image', content: global.shareImgUrl + 'amy.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Artist Showcase`},
      {name: 'twitter:image', content: global.shareImgUrl + 'amy.jpg'}
    ])
  }

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/artists/amy/one.jpg',
      '/images/artists/amy/two.jpg',
      '/images/artists/amy/three.jpg',
      '/images/artists/amy/four.jpg',
      '/images/artists/amy/five.jpg',
      '/images/artists/amy/six.jpg',
      '/images/artists/amy/seven.jpg',
      '/images/artists/amy/eight.jpg',
      '/images/artists/amy/nine.jpg'
    ]
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }


  ispostTitle: boolean = true;
  ispostImage: boolean = false;
  isimageCaption: boolean = false;
  ispostSubtitle: boolean = false;
  ispostSubtitlePhoto: boolean = false;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = false;
  isqa1: boolean = false;
  isqa2: boolean = false;
  isphotoDescription: boolean = false;
  issocial: boolean = true;

  postTitle = 'Amy Vaughn';

  socials = [
    {
      description: "amyvaughn.bigcartel",
      url: "http://www.amyvaughn.bigcartel.com/",
      img: "/images/icons/website.png"
    },
    {
      description: "amy_vaughn",
      url: "https://www.instagram.com/amy__vaughn/",
      img: "/images/icons/insta.png"
    }
  ];

  pageUrl: string = 'AmyVaughn';
  shareTitle: string = 'Amy%20Vaughn';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artist, coolart, creatives";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


}
