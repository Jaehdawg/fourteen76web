import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-sloss',
  templateUrl: './templates/lostsloss.component.html'

})
export class LostSloss implements OnInit {
  constructor(private router: Router, private titleService: Title) {}



  postTitle = 'Lost In The Sloss';
  postImage = "/images/headImages/lostsloss.jpg";
  postImageTwo = "/images/postImages/lostsloss1.jpg";
  postImageThree = "/images/postImages/lostsloss2.jpg";
  postImageFour = "/images/postImages/lostsloss3.jpg";
  postSubtitle = "By Elliott Moe";
  postSubtitlePhoto = "Photography by JP Davis";

  shareFacebook = "https://www.facebook.com/fourteen76/";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
  }
}
