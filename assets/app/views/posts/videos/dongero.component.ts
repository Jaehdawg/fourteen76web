import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dongero',
  templateUrl: './video.component.html'
})

export class DonGero implements OnInit {
  url: SafeResourceUrl;
  isUrl2: boolean = false;
  constructor(private titleService: Title, private sanitizer: DomSanitizer, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Live performance by Don Gero`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Live performance by Don Gero`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'dongero.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Live performance by Don Gero`},
      {name: 'twitter:image', content: global.shareImgUrl + 'dongero.jpg'}
    ])
    this.url = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/h-qmgYr0VC0");
  }

  postTitle = 'Don Gero Performs Wizarding';
  postSubtitle = "Live at The Firehouse";

  isDescription: boolean = true;
  descriptions = [
    "Don Gero's visceral and hypnotic performance of his newest release Wizarding. Based out of Portland, Oregon, he uses drum triggers that activate modular synths (some self-designed and engineered), all chained to a pedal board for live control. He cites Philip Glass and the soundtrack to The Legend of Zelda: A Link to the Past as melodic influences; the spells this double wand wielding conjurer summons on the drums are pulled straight from the ether.",
    "Plug in your headphones for this one."
  ];

  isSocial: boolean = true;
  isWebsite: boolean = true;
  isInstagram: boolean = true;
  website = {
    description: "Don Gero Bandcamp",
    url: "https://dongero.bandcamp.com/"
  };
  instagram = {
    description: "don.gero",
    url: "https://www.instagram.com/don.gero/"
  };


  pageUrl: string = 'DonGero';
  shareTitle: string = 'Don%20Gero';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "livemusic, music, drummer";
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
