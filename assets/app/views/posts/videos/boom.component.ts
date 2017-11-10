import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-boom',
  templateUrl: './video.component.html'
})

export class Boom implements OnInit {
  url: SafeResourceUrl;
  isUrl2: boolean = true;
  url2: SafeResourceUrl;
  constructor(private titleService: Title, private sanitizer: DomSanitizer) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl("https://player.vimeo.com/video/167556831");
    this.url2 = sanitizer.bypassSecurityTrustResourceUrl("https://player.vimeo.com/video/214264877");
  }

  postTitle = 'BOOM!';
  postSubtitle = "Lily Ahree Siegel";

  isHeading: boolean = true;
  descriptionHeading = "BOOM!";
  isDescription: boolean = true;
  descriptions = [
    "Life on set as a boom operator and recordist, as shown by Fischer. Shot in 16mm Kodak 7219 500T on an Arriflex 16SRII.",
    "\"Letter from a Birmingham Girl\" is an autobiographical, short documentary led by Lily, who is both the voice and filmmaker of the project, through the intersection of her identities and family. This film is focusing on what’s at stake within her personal relationships, and the beginning of separating from her family within her hometown of Birmingham, Alabama."
  ];

  isSocial: boolean = true;
  isWebsite: boolean = true;
  website = {
    description: "Lily Siegel Vimeo",
    url: "https://vimeo.com/lilyahreesiegel"
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
