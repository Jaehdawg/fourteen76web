import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Caroline implements OnInit {
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
      {property: 'og:image', content: global.shareImgUrl + 'caroline_erb.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Artist Showcase`},
      {name: 'twitter:image', content: global.shareImgUrl + 'caroline_erb.jpg'}
    ]);
  }

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/artists/caroline/one.jpg',
      '/images/artists/caroline/two.jpg',
      '/images/artists/caroline/three.jpg',
      '/images/artists/caroline/four.jpg',
      '/images/artists/caroline/five.jpg',
      '/images/artists/caroline/six.jpg',
      '/images/artists/caroline/seven.jpg',
      '/images/artists/caroline/eight.jpg',
      '/images/artists/caroline/nine.jpg',
      '/images/artists/caroline/ten.jpg'
    ];
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
  isphotoDescription: boolean = true;
  issocial: boolean = true;

  postTitle = 'Carolie Erb';
  photoDescription = "I use my art as a coping mechanism - it helps me process overwhelming or uncomfortable emotions. A constant theme for me is trying to find a balance between vulnerability and vagueness. I seesaw a lot between emotional transparency and distance, and am currently re-examing what it is I want to reveal in my art. People have used the word \"intimate\" quite frequently to describe what I do, and I think it makes some people uncomfortable to see art like mine in public spaces."

  socials = [
    {
      description: "oddbirditems etsy",
      url: "https://www.etsy.com/shop/oddbirditems",
      img: "/images/icons/website.png"
    }
  ];

  pageUrl: string = 'CarolineErb';
  shareTitle: string = 'Caroline%20Erb';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artist, coolart, creatives";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


}
