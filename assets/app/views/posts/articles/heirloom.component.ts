import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-heirloom',
  templateUrl: './templates/heirloom.component.html'

})
export class HeirloomComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}



  postTitle = 'Heirloom';
  postImage = "/images/headImages/heirloom.jpg";
  postImageTwo = "/images/postImages/heirloom.jpg";
  postImageThree = "/images/postImages/heirloom2.jpg";
  postImageFour = "/images/postImages/heirloom3.jpg";
  postImageFive = "/images/postImages/heirloom4.jpg";
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
