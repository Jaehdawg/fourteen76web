import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-sleep',
  templateUrl: './templates/sleepdrive.component.html'

})
export class SleepDrive implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Birmingham native, Ant'lrd's, newest LP pivots on the hinges of a modern nostalgia, swaying back and forth between memories not yet experienced and flashes of past lives with lilting precision. The three track release is a long draw from a deep well, while never overstaying its welcome. Here Ant'lrd sheds a little insight on his most recent mantra, Sleep Drive.`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Birmingham native, Ant'lrd's, newest LP pivots on the hinges of a modern nostalgia, swaying back and forth between memories not yet experienced and flashes of past lives with lilting precision. The three track release is a long draw from a deep well, while never overstaying its welcome. Here Ant'lrd sheds a little insight on his most recent mantra, Sleep Drive.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'sleepdrive.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Birmingham native, Ant'lrd's, newest LP pivots on the hinges of a modern nostalgia, swaying back and forth between memories not yet experienced and flashes of past lives with lilting precision. The three track release is a long draw from a deep well, while never overstaying its welcome. Here Ant'lrd sheds a little insight on his most recent mantra, Sleep Drive.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'sleepdrive.jpg'}
    ])
  }



  postTitle = 'Sleep Drive';
  postImage = "/images/headImages/sleepdrivehead.jpg";
  postImageTwo = "/images/postImages/sleepdrive.jpg";
  postSubtitle = "By Jonathan Patrick";

  pageUrl: string = 'SleepDrive';
  shareTitle: string = 'Sleep%20Drive';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "muscianinterview, alternativemusic, music";
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
