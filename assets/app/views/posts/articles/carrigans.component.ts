import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-carrigans',
  templateUrl: './templates/carrigans.component.html'

})
export class CarrigansComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}



  postTitle = 'A Street Soul, Fine and Fried';
  postImage = "/images/headImages/carrigans.jpg";
  postImageTwo = "/images/postImages/carrigan.png";
  postImageThree = "/images/postImages/carrigan2.jpg";
  postImageFour = "/images/postImages/carrigan3.jpg";
  postImageFive = "/images/postImages/carrigan4.jpg";
  postImageSix = "/images/postImages/carrigan5.jpg";
  postImageSeven = "/images/postImages/carrigan6.jpg";
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
