import {Component, OnInit} from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';
import * as global from '../global';


@Component ({
  selector: 'app-zyp',
  templateUrl: './templates/zyp.component.html'

})
export class ZypComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `If you happen to be unfamiliar with Zyp BikeShare, the initiative's aim is to provide a reliable and alternative source to getting from point A to point B. Zyp provides a new mode of transportation within Birmingham's city limits. Forty kiosks harboring four hundred bicycles are scattered throughout the city; from Uptown to Highlands, Zyp bikes are available to all.`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `If you happen to be unfamiliar with Zyp BikeShare, the initiative's aim is to provide a reliable and alternative source to getting from point A to point B. Zyp provides a new mode of transportation within Birmingham's city limits. Forty kiosks harboring four hundred bicycles are scattered throughout the city; from Uptown to Highlands, Zyp bikes are available to all.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'zyp.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `If you happen to be unfamiliar with Zyp BikeShare, the initiative's aim is to provide a reliable and alternative source to getting from point A to point B. Zyp provides a new mode of transportation within Birmingham's city limits. Forty kiosks harboring four hundred bicycles are scattered throughout the city; from Uptown to Highlands, Zyp bikes are available to all.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'zyp.jpg'}
    ])
  }




  postTitle = 'Zyp, Changing the Way Birmigham Bikes';
  postImage = "/images/headImages/zyp.jpg";
  postImageTwo = "/images/postImages/zyp1.jpg";
  postImageThree = "/images/postImages/zyp2.jpg";
  postImageFour = "/images/postImages/zyp3.jpg";
  postImageFive = "/images/postImages/zyp4.jpg";
  postImageSix = "/images/postImages/zyp5.jpg";
  postSubtitle = "By Lee Panter";
  postSubtitlePhoto = "Photography by Mateo Montoya";

  pageUrl: string = 'Zyp';
  shareTitle: string = 'Zyp%20Birmingham';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "zyp, biking, publictransportation, Birmingham";
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
