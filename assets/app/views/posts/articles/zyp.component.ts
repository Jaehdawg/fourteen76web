import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-zyp',
  templateUrl: './templates/zyp.component.html'

})
export class ZypComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}



  postTitle = 'Zyp, Changing the Way Birmigham Bikes';
  postImage = "/images/headImages/zyp.jpg";
  postImageTwo = "/images/postImages/zyp1.jpg";
  postImageThree = "/images/postImages/zyp2.jpg";
  postImageFour = "/images/postImages/zyp3.jpg";
  postImageFive = "/images/postImages/zyp4.jpg";
  postImageSix = "/images/postImages/zyp5.jpg";
  postSubtitle = "By Lee Panter";
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
