import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-boom',
  templateUrl: './video.component.html'
})

export class Boom implements OnInit {
  url: SafeResourceUrl;
  isUrl2: boolean = true;
  url2: SafeResourceUrl;
  constructor(private titleService: Title, private sanitizer: DomSanitizer, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Short film by Lily Ahree Siegel`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Short film by Lily Ahree Siegel`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'boom.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Short film by Lily Ahree Siegel`},
      {name: 'twitter:image', content: global.shareImgUrl + 'boom.jpg'}
    ])
    this.url = sanitizer.bypassSecurityTrustResourceUrl("https://player.vimeo.com/video/167556831");
    this.url2 = sanitizer.bypassSecurityTrustResourceUrl("https://player.vimeo.com/video/214264877");
  }

  postTitle = 'BOOM!';
  postSubtitle = "Lily Ahree Siegel";

  isHeading: boolean = true;
  descriptionHeading = "BOOM!";
  isDescription: boolean = true;
  descriptions = [
    "Life on set as a boom operator and recordist, as shown by Fischer. Shot in 16mm Kodak 7219 500T on an Arriflex 16SRII.",
    "\"Letter from a Birmingham Girl\" is an autobiographical, short documentary led by Lily, who is both the voice and filmmaker of the project, through the intersection of her identities and family. This film is focusing on what’s at stake within her personal relationships, and the beginning of separating from her family within her hometown of Birmingham, Alabama."
  ];

  isSocial: boolean = true;
  isWebsite: boolean = true;
  website = {
    description: "Lily Siegel Vimeo",
    url: "https://vimeo.com/lilyahreesiegel"
  };

  pageUrl: string = 'Boom';
  shareTitle: string = 'Boom';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "shortfilm";
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
