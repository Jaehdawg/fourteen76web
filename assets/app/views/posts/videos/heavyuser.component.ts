import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-heavyuser',
  templateUrl: './video.component.html'
})

export class HeavyUser implements OnInit {
  url: SafeResourceUrl;
  isUrl2: boolean = false;
  constructor(private titleService: Title, private sanitizer: DomSanitizer, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Live Heavy User performance at the Glen Iris Laundy Mat`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Live Heavy User performance at the Glen Iris Laundy Mat`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'dongero.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Live Heavy User performance at the Glen Iris Laundy Mat`},
      {name: 'twitter:image', content: global.shareImgUrl + 'dongero.jpg'}
    ])
    this.url = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/_vBwLfwbfJo");
  }

  postTitle = 'Heavy User';
  postSubtitle = "Live at Glen Iris Laundry";
  isDescription: boolean = false;
  isSocial: boolean = false;


  pageUrl: string = 'HeavyUser';
  shareTitle: string = 'Heavy%20User';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "livemusic, music, punk";
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
