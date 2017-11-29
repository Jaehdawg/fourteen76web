import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-erotica',
  templateUrl: './templates/erotica.component.html'

})
export class EroticaComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `As the arts in Birmingham grow steadily and as a centralized, DIY artists' community begins to extend upward from its roots, spaces like Chroma Cove, a new studio and venue in Forest Park, prove how essential they are to this growth.`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `As the arts in Birmingham grow steadily and as a centralized, DIY artists' community begins to extend upward from its roots, spaces like Chroma Cove, a new studio and venue in Forest Park, prove how essential they are to this growth.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'chromacove.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `As the arts in Birmingham grow steadily and as a centralized, DIY artists' community begins to extend upward from its roots, spaces like Chroma Cove, a new studio and venue in Forest Park, prove how essential they are to this growth.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'chromacove.jpg'}
    ])
  }



  postTitle = 'Art Erotica and the Censored Youth';
  postImage = "/images/headImages/erotica.jpg";
  postImageTwo = "/images/postImages/erotica1.jpg";
  postImageThree = "/images/postImages/exotica2.jpg";
  postImageFour = "/images/postImages/erotica4.jpg";
  postSubtitle = "By Jonathan Patrick";
  postSubtitlePhoto = "Photography by Mateo Montoya";

  pageUrl: string = 'ArtErotica';
  shareTitle: string = 'Art%20Erotica';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artists, artgallery, creatives";
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
