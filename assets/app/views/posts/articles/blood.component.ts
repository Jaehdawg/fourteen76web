import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-blood',
  templateUrl: './templates/blood.component.html'

})
export class BloodComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: "\"It's not productive to the movement if I'm the focus,\" Jordan Eagles said into his phone. He was speaking to a member of his marketing team in New York about a promotional video for his piece, Blood Mirror, a seven foot tall glass monolith filled with the blood of 59 donors denied the right to give blood due to their sexual orientation."},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: "\"It's not productive to the movement if I'm the focus,\" Jordan Eagles said into his phone. He was speaking to a member of his marketing team in New York about a promotional video for his piece, Blood Mirror, a seven foot tall glass monolith filled with the blood of 59 donors denied the right to give blood due to their sexual orientation."},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'ourbloodshare.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: "\"It's not productive to the movement if I'm the focus,\" Jordan Eagles said into his phone. He was speaking to a member of his marketing team in New York about a promotional video for his piece, Blood Mirror, a seven foot tall glass monolith filled with the blood of 59 donors denied the right to give blood due to their sexual orientation."},
      {name: 'twitter:image', content: global.shareImgUrl + 'ourbloodshare.jpg'}
    ])
  }



  postTitle = 'Blood Equality: A Fight or Human Rights';
  postImage = "/images/headImages/blood.jpg";
  postImageTwo = "/images/postImages/blood1.jpg";
  postImageThree = "/images/postImages/blood2.jpg";
  postImageFour = "/images/postImages/blood4.jpg";
  postSubtitle = "By Jonathan Patrick";
  postSubtitlePhoto = "Photography by Mateo Montoya";

  pageUrl: string = 'BloodEquality';
  shareTitle: string = 'Blood%20Equality';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "BloodEquality, lgtbqrights, lgtbq, equalrights";
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
