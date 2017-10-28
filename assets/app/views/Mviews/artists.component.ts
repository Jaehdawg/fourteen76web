import {Component, OnInit, AfterViewChecked, ElementRef, ViewChild} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-artists',
  templateUrl: './templates/artists.component.html'

})
export class ArtistsComponent implements OnInit, AfterViewChecked {
  constructor(private router: Router, private titleService: Title) {}

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;


  ngOnInit() {
    this.titleService.setTitle('Artists');
    this.scrollToBottom();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }
    }

  page = "page1";

  activityColor1 = '#000';
  activityColor2 = '';



  activeCircle1() {
    this.activityColor1 = '#000';
    this.activityColor2 = '';

  }
  activeCircle2() {
    this.activityColor1 = '';
    this.activityColor2 = '#000';

  }

  pageNav(nav) {
    if (nav === 'nav1') {
      this.page = 'page1';
    } else if (nav ===  'nav2') {
      this.page = 'page2';
    }  else {
      this.page = 'page1';
    }
  }

}
