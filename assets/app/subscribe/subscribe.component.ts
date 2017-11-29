import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-subcribe',
  templateUrl: './subscribe.component.html'
})
export class SubscribeComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Keep up with Fouteen76. Sign up for our infrequent newsletter.`},
      {property: 'og:title', content: "Subscribe | Fourteen76"},
      {property: 'og:description', content: `Keep up with Fouteen76. Sign up for our infrequent newsletter.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'fourteen76.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: "Subscribe | Fourteen76"},
      {name: 'twitter:description', content: `Keep up with Fouteen76. Sign up for our infrequent newsletter.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'fourteen76.jpg'}
    ]);
  }
  pageUrl = 'subscribe';
  ngOnInit() {
    this.titleService.setTitle('Subscribe');
  }
}
