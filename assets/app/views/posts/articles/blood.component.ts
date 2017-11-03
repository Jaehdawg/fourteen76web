import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-blood',
  templateUrl: './templates/blood.component.html'

})
export class BloodComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}



  postTitle = 'Blood Equality: A Fight or Human Rights';
  postImage = "/images/headImages/blood.jpg";
  postImageTwo = "/images/postImages/blood1.jpg";
  postImageThree = "/images/postImages/blood2.jpg";
  postImageFour = "/images/postImages/blood4.jpg";
  postSubtitle = "By Jonathan Patrick";
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
