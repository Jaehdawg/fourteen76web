import {Component, OnInit} from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';
import * as global from '../global';


@Component ({
  selector: 'app-upper',
  templateUrl: './templates/upperroom.component.html'

})
export class UpperRoom implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `“In the Upper Room” is a piece that shows a ballet company’s chops, so to say. To perform the piece requires a company of dancers who fully understand the intricacies of modern dance, who can accomplish small ticks and jerks while maintaining the austere ease of ballet dancers.`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `“In the Upper Room” is a piece that shows a ballet company’s chops, so to say. To perform the piece requires a company of dancers who fully understand the intricacies of modern dance, who can accomplish small ticks and jerks while maintaining the austere ease of ballet dancers.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'upperroom.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `“In the Upper Room” is a piece that shows a ballet company’s chops, so to say. To perform the piece requires a company of dancers who fully understand the intricacies of modern dance, who can accomplish small ticks and jerks while maintaining the austere ease of ballet dancers.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'upperroom.jpg'}
    ])
  }


  postTitle = 'In The Upper Room';
  postImage = "/images/headImages/upper.jpg";
  postImageTwo = "/images/postImages/upper1.jpg";
  postImageThree = "/images/postImages/upper2.jpg";
  postSubtitle = "By Nicola Walls";
  postSubtitlePhoto = "Photography by Melissa Dooley";

  pageUrl: string = 'UpperRoom';
  shareTitle: string = 'In%20The%20Upper%20Room';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "ballet, music, upperroom";
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
