import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-untitled',
  templateUrl: './templates/untitled.component.html'
})

export class Untitled implements OnInit {
  postTitle = "Untitled";
  postSubtitle = "Andrew Dominguez";
  postImageOne = "/images/photography/untitled/one.jpg";
  postImageTwo = "/images/photography/untitled/two.jpg";
  postImageThree = "/images/photography/untitled/three.jpg";
  postImageFour = "/images/photography/untitled/four.jpg";
  postImageFive = "/images/photography/untitled/five.jpg";
  postImageSix = "/images/photography/untitled/six.jpg";
  postImageSeven = "/images/photography/untitled/seven.jpg";
  postImageEight = "/images/photography/untitled/eight.jpg";
  postImageNine = "/images/photography/untitled/nine.jpg";
  postImageTen = "/images/photography/untitled/ten.jpg";
  postImageEleven = "/images/photography/untitled/eleven.jpg";
  postImageTwelve = "/images/photography/untitled/twelve.jpg";

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'untitled.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'untitled.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'Untitled';
  shareTitle: string = 'Untitled';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
