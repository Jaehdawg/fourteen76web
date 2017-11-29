import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-homeward',
  templateUrl: './video.component.html'
})

export class Homeward implements OnInit {
  url: SafeResourceUrl;
  isUrl2: boolean = false;
  constructor(private titleService: Title, private sanitizer: DomSanitizer, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Video by LITTLE GIRL`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Video by LITTLE GIRL`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'homeward.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Video by LITTLE GIRL`},
      {name: 'twitter:image', content: global.shareImgUrl + 'homeward.jpg'}
    ])
    this.url = sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/E7RcwDF3XoU");
  }

  postTitle = 'Homeward Bound';
  postSubtitle = "LITTLE GIRL";

  isDescription: boolean = true;
  descriptions = [
    "Space out as Little Girl celestially vogues into quintessence with the additional production of Tyler Ambrosius of Step Pepper Records"
  ];

  isSocial: boolean = true;
  isWebsite: boolean = false;
  isInstagram: boolean = true;
  instagram = {
    description: "littlegirlsong",
    url: "https://www.instagram.com/littlegirlsong/"
  };


  pageUrl: string = 'HomewardBound';
  shareTitle: string = 'Homeward%20Bound';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "musicvideo, music";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }
}
