import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Gaijin implements OnInit {
  isSlider: boolean = true;
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/artists/gaijin/one.jpg',
      '/images/artists/gaijin/two.jpg',
      '/images/artists/gaijin/three.jpg',
      '/images/artists/gaijin/four.jpg',
      '/images/artists/gaijin/five.jpg',
      '/images/artists/gaijin/six.jpg',
      '/images/artists/gaijin/seven.jpg',
      '/images/artists/gaijin/eight.jpg'
    ]
  }

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = false;
  ispostSubtitlePhoto: boolean = false;
  ispostImage: boolean = false;
  isimageCaption: boolean = false;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = false;
  isqa1: boolean = false;
  isqa2: boolean = false;
  isphotoDescription: boolean = false;
  issocial: boolean = true;

  postTitle = 'Gaijin X';

  isSocial: boolean = true;
  socials = [
    {
      description: "gaijincollective.com",
      url: "https://www.gaijincollective.com/",
      img: "/images/icons/website.png"
    },
    {
      description: "gaijinisntphysical",
      url: "https://www.instagram.com/gaijinisntphysical/",
      img: "/images/icons/insta.png"
    }
  ];

  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


}
