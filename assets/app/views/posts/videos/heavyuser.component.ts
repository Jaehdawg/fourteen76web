import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-heavyuser',
  templateUrl: './video.component.html'
})

export class HeavyUser implements OnInit {
  url: SafeResourceUrl;
  constructor(private titleService: Title, private sanitizer: DomSanitizer) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/_vBwLfwbfJo");
  }

  postTitle = 'Heavy User';
  postSubtitle = "Live at Glen Iris Laundry";

  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
  }
}
