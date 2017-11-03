import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-dead',
  templateUrl: './templates/balloons.component.html'

})
export class DeadBalloons implements OnInit {
  constructor(private router: Router, private titleService: Title) {}



  postTitle = 'Review of Dead Balloons';
  postImage = "/images/headImages/deadballoons.jpg";
  postImageTwo = "/images/postImages/balloons1.jpg";
  postImageThree = "/images/postImages/balloons2.jpg";
  postSubtitle = "By Eugene Yess";
  postSubtitlePhoto = "Photography by Mateo Montoya";

  shareFacebook = "https://www.facebook.com/fourteen76/";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
  }
}
