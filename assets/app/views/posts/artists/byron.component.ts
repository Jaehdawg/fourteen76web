import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-byron',
  templateUrl: './byron.component.html'

})
export class ByronA implements OnInit {
  constructor(private router: Router, private titleService: Title) {}



  postTitle = 'Byron Sonnier';
  postImage = "/images/artists/byron/byron1.jpg";
  postImageTwo = "/images/artists/byron/byron2.jpg";
  postImageThree = "/images/artists/byron/byron3.jpg"
  postSubtitle = "Interview by Jonathan Patrick";

  shareFacebook = "https://www.facebook.com/fourteen76/";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
  }
}
