import {Component, OnInit, AfterViewChecked, ElementRef, ViewChild} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-home',
  templateUrl: './templates/home.component.html'

})
export class HomeComponent implements OnInit, AfterViewChecked {
  constructor(private router: Router, private titleService: Title) {}

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;


  ngOnInit() {
    this.titleService.setTitle('Home');
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
  activityColor3 = '';
  activityColor4 = '';


  activeCircle1() {
    this.activityColor1 = '#000';
    this.activityColor2 = '';
    this.activityColor3 = '';
    this.activityColor4 = '';
  }
  activeCircle2() {
    this.activityColor1 = '';
    this.activityColor2 = '#000';
    this.activityColor3 = '';
    this.activityColor4 = '';
  }
  activeCircle3() {
    this.activityColor1 = '';
    this.activityColor2 = '';
    this.activityColor3 = '#000';
    this.activityColor4 = '';
  }
  activeCircle4() {
    this.activityColor1 = '';
    this.activityColor2 = '';
    this.activityColor3 = '';
    this.activityColor4 = '#000';
  }

  pageNav(nav) {
    if (nav === 'nav1') {
      this.page = 'page1';
    } else if (nav ===  'nav2') {
      this.page = 'page2';
    }
    else if (nav ===  'nav3') {
      this.page = 'page3';
    }
    else if (nav ===  'nav4') {
      this.page = 'page4';
    } else {
      this.page = 'page1';
    }
  }

}
