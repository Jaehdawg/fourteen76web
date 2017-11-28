import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as global from '../global';


@Component ({
  selector: 'app-nick',
  templateUrl: './templates/thenick.component.html'

})
export class NickRocks implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Rock n' Roll sans sticky dives is like a family lacking its con uncle, like mud minus hot, sweet dirt; that lil bit of grit, an essential ingredient in the mix of what makes a memory worth a smile. There's some fucked, mild magic in the intimacy gained while piled inside a spooky rock clubs' most American moments.`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Rock n' Roll sans sticky dives is like a family lacking its con uncle, like mud minus hot, sweet dirt; that lil bit of grit, an essential ingredient in the mix of what makes a memory worth a smile. There's some fucked, mild magic in the intimacy gained while piled inside a spooky rock clubs' most American moments.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'fourteen76.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Rock n' Roll sans sticky dives is like a family lacking its con uncle, like mud minus hot, sweet dirt; that lil bit of grit, an essential ingredient in the mix of what makes a memory worth a smile. There's some fucked, mild magic in the intimacy gained while piled inside a spooky rock clubs' most American moments.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'fourteen76.jpg'}
    ])
  }



  postTitle = 'The Nick Still Rocks';
  postImage = "/images/headImages/nick.jpg";
  postImageTwo = "/images/postImages/nick1.jpg";
  postSubtitle = "By Jonathan Patrick";
  postSubtitlePhoto = "Photography by Jonathan Patrick and Rachel Roberts";

  pageUrl: string = 'TheNick';
  shareTitle: string = 'The%20Nick';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "thenickbham, venue, bhamevents";
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
