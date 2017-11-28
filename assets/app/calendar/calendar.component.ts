import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html'

})
export class CalendarComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Keep up with local art, music, and community events in the Birmingham area.`},
      {property: 'og:title', content: "Calendar | Fourteen76"},
      {property: 'og:description', content: `Keep up with local art, music, and community events in the Birmingham area.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'fourteen76.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: "Calendar | Fourteen76"},
      {name: 'twitter:description', content: `Keep up with local art, music, and community events in the Birmingham area.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'fourteen76.jpg'}
    ]);
  }
  ngOnInit() {
    this.titleService.setTitle('Calendar');
  }
  filter(){
    console.log('Filter Clicked');
  };

}
