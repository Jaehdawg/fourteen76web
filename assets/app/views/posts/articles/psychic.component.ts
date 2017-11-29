import {Component, OnInit} from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-psy',
  templateUrl: './templates/psychic.component.html'

})
export class PsychicHotline implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `I meet Ruth Ex at the coffee shop. A petite frame sports a menagerie of tattoos and piercings balancing against an androgynous haircut and dark lipstick; Ruth Ex is as hungover as I am from the events of Southern Decadence, so the coffee is well appreciated. Their voice is soft and polite as Ruth Ex explains the house show approaching in four or so hours.`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `I meet Ruth Ex at the coffee shop. A petite frame sports a menagerie of tattoos and piercings balancing against an androgynous haircut and dark lipstick; Ruth Ex is as hungover as I am from the events of Southern Decadence, so the coffee is well appreciated. Their voice is soft and polite as Ruth Ex explains the house show approaching in four or so hours.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'psychic.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `I meet Ruth Ex at the coffee shop. A petite frame sports a menagerie of tattoos and piercings balancing against an androgynous haircut and dark lipstick; Ruth Ex is as hungover as I am from the events of Southern Decadence, so the coffee is well appreciated. Their voice is soft and polite as Ruth Ex explains the house show approaching in four or so hours.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'psychic.jpg'}
    ])
  }



  postTitle = 'PSYCHIC HOTLINE';
  postImage = "/images/headImages/psychic.jpg";
  postImageTwo = "/images/postImages/psychic.jpg";
  postSubtitle = "By Ahmad Jackson";

  pageUrl: string = 'PsychicHotline';
  shareTitle: string = 'Pyschic%20Hotline';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "music, lgtbqartist, muscianinterview, bandinterview";
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
