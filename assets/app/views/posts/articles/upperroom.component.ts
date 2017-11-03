import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-upper',
  templateUrl: './templates/upperroom.component.html'

})
export class UpperRoom implements OnInit {
  constructor(private router: Router, private titleService: Title) {}



  postTitle = 'In The Upper Room';
  postImage = "/images/headImages/upper.jpg";
  postImageTwo = "/images/postImages/upper1.jpg";
  postImageThree = "/images/postImages/upper2.jpg";
  postSubtitle = "By Nicola Walls";
  postSubtitlePhoto = "Photography by Melissa Dooley";

  shareFacebook = "https://www.facebook.com/fourteen76/";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";



  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
  }
}
