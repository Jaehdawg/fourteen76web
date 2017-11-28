import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as global from '../global';


@Component ({
  selector: 'app-marriage',
  templateUrl: './templates/marriage.component.html'

})
export class MarriageComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `I'm really influenced by Black people surviving in the US, the QPOC community, single parents, anyone fighting patriarchy, plutocracy and standing up to ignorant assholes in general.`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `I'm really influenced by Black people surviving in the US, the QPOC community, single parents, anyone fighting patriarchy, plutocracy and standing up to ignorant assholes in general.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'marriage.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `I'm really influenced by Black people surviving in the US, the QPOC community, single parents, anyone fighting patriarchy, plutocracy and standing up to ignorant assholes in general.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'marriage.jpg'}
    ])
  }



  postTitle = 'Marriage ';
  postImage = "/images/headImages/marriage.jpg";
  postImageTwo = "/images/postImages/marriage.jpg";
  postSubtitle = "By Ahmad Jackson";

  pageUrl: string = 'Marriage';
  shareTitle: string = 'Marriage';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistinterview, music, muscian, creatives";
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
