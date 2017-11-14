import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dongero',
  templateUrl: './video.component.html'
})

export class DonGero implements OnInit {
  url: SafeResourceUrl;
  isUrl2: boolean = false;
  constructor(private titleService: Title, private sanitizer: DomSanitizer) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/h-qmgYr0VC0");
  }

  postTitle = 'Don Gero Performs Wizarding';
  postSubtitle = "Live at The Firehouse";

  isDescription: boolean = true;
  descriptions = [
    "Don Gero's visceral and hypnotic performance of his newest release Wizarding. Based out of Portland, Oregon, he uses drum triggers that activate modular synths (some self-designed and engineered), all chained to a pedal board for live control. He cites Philip Glass and the soundtrack to The Legend of Zelda: A Link to the Past as melodic influences; the spells this double wand wielding conjurer summons on the drums are pulled straight from the ether.",
    "Plug in your headphones for this one."
  ];

  isSocial: boolean = true;
  isWebsite: boolean = true;
  isInstagram: boolean = true;
  website = {
    description: "Don Gero Bandcamp",
    url: "https://dongero.bandcamp.com/"
  };
  instagram = {
    description: "don.gero",
    url: "https://www.instagram.com/don.gero/"
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
