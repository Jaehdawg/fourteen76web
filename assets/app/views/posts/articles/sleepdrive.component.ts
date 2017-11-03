import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-sleep',
  templateUrl: './templates/sleepdrive.component.html'

})
export class SleepDrive implements OnInit {
  constructor(private router: Router, private titleService: Title) {}



  postTitle = 'Sleep Drive';
  postImage = "/images/headImages/sleepdrivehead.jpg";
  postImageTwo = "/images/postImages/sleepdrive.jpg";
  postSubtitle = "By Jonathan Patrick";

  shareFacebook = "https://www.facebook.com/fourteen76/";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
  }
}
