import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-ghouls',
  templateUrl: './templates/ghouls.component.html'
})

export class Ghouls implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Murdered by Ghouls";
  postSubtitle = "Andrew Dominguez";
  postDescriptionOne = "The timelapse was photographed in February 2017 by Andrew Dominguez. Shot across four Mexico City boroughs; Polanco, Roma norte, Chapultepec, & Condesa.";


  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'murdered_by_ghouls.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'murdered_by_ghouls.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/ghouls/one.jpg',
      '/images/photography/ghouls/two.jpg',
      '/images/photography/ghouls/three.jpg',
      '/images/photography/ghouls/four.jpg',
      '/images/photography/ghouls/five.jpg',
      '/images/photography/ghouls/seven.jpg',
      '/images/photography/ghouls/eight.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'MurderedGhouls';
  shareTitle: string = 'Murdered%20by%20Ghouls';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photography";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
