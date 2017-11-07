import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-erotica',
  templateUrl: './templates/erotica.component.html'

})
export class EroticaComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}



  postTitle = 'Art Erotica and the Censored Youth';
  postImage = "/images/headImages/erotica.jpg";
  postImageTwo = "/images/postImages/erotica1.jpg";
  postImageThree = "/images/postImages/exotica2.jpg";
  postImageFour = "/images/postImages/erotica4.jpg";
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
