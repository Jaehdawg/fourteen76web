import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-sloss',
  templateUrl: './templates/lostsloss.component.html'

})
export class LostSloss implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Underneath the looming skeleton that once was Birmingham’s bloodline a two day festival took place that attracted everyone from cross dressers in appropriated Native American war bonnets to caucasian dads in khakis. All gathered at the altar of music to see how much beer could be consumed and then sweated out under the glaring southern sun.`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Underneath the looming skeleton that once was Birmingham’s bloodline a two day festival took place that attracted everyone from cross dressers in appropriated Native American war bonnets to caucasian dads in khakis. All gathered at the altar of music to see how much beer could be consumed and then sweated out under the glaring southern sun.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'sloss.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Underneath the looming skeleton that once was Birmingham’s bloodline a two day festival took place that attracted everyone from cross dressers in appropriated Native American war bonnets to caucasian dads in khakis. All gathered at the altar of music to see how much beer could be consumed and then sweated out under the glaring southern sun.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'sloss.jpg'}
    ])
  }




  postTitle = 'Lost In The Sloss';
  postImage = "/images/headImages/lostsloss.jpg";
  postImageTwo = "/images/postImages/lostsloss1.jpg";
  postImageThree = "/images/postImages/lostsloss2.jpg";
  postImageFour = "/images/postImages/lostsloss3.jpg";
  postSubtitle = "By Elliott Moe";
  postSubtitlePhoto = "Photography by JP Davis";

  pageUrl: string = 'LostSloss';
  shareTitle: string = 'Lost%20Sloss';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "slossfest, musicfestival, music";
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
