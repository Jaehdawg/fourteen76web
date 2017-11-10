import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-homeward',
  templateUrl: './video.component.html'
})

export class Homeward implements OnInit {
  url: SafeResourceUrl;
  constructor(private titleService: Title, private sanitizer: DomSanitizer) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/E7RcwDF3XoU");
  }

  postTitle = 'Homeward Bound';
  postSubtitle = "LITTLE GIRL";

  isDescription: boolean = true;
  descriptions = [
    "Space out as Little Girl celestially vogues into quintessence with the additional production of Tyler Ambrosius of Step Pepper Records"
  ];

  isSocial: boolean = true;
  isWebsite: boolean = false;
  isInstagram: boolean = true;
  instagram = {
    description: "littlegirlsong",
    url: "https://www.instagram.com/littlegirlsong/"
  };


  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
  }
}
