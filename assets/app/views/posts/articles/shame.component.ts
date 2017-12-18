import {Component, OnInit} from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';
import * as global from '../global';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';



@Component ({
  selector: 'app-shame',
  templateUrl: './templates/shame.component.html'

})
export class Shame implements OnInit {
  url: SafeResourceUrl;
  isUrl2: boolean = true;
  url2: SafeResourceUrl;
  constructor(private titleService: Title, private meta: Meta, private sanitizer: DomSanitizer) {
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
    ]);
    this.url = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/yztNOX0H8HE");
    this.url2 = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/_MVLqZpnwow");
  }


  postTitle = 'Shame';
  postImage = "/images/headImages/shame.jpg";
  postImageTwo = "/images/postImages/shame1.jpg";
  postImageThree = "/images/postImages/shame2.jpg";
  postImageFour = "/images/postImages/shame3.jpg";
  postSubtitle = "Interview and Photography by Elliott Moe";

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
