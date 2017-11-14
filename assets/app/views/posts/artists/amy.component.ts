import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Amy implements OnInit {
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
      '/images/artists/amy/one.jpg',
      '/images/artists/amy/two.jpg',
      '/images/artists/amy/three.jpg',
      '/images/artists/amy/four.jpg',
      '/images/artists/amy/five.jpg',
      '/images/artists/amy/six.jpg',
      '/images/artists/amy/seven.jpg',
      '/images/artists/amy/eight.jpg',
      '/images/artists/amy/nine.jpg'
    ]
  }

  ispostTitle: boolean = true;
  ispostImage: boolean = false;
  isimageCaption: boolean = false;
  ispostSubtitle: boolean = false;
  ispostSubtitlePhoto: boolean = false;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = false;
  isqa1: boolean = false;
  isqa2: boolean = false;
  isphotoDescription: boolean = false;
  issocial: boolean = true;

  postTitle = 'Amy Vaughn';

  socials = [
    {
      description: "amyvaughn.bigcartel",
      url: "http://www.amyvaughn.bigcartel.com/",
      img: "/images/icons/website.png"
    },
    {
      description: "amy__vaughn",
      url: "https://www.instagram.com/amy__vaughn/",
      img: "/images/icons/insta.png"
    }
  ];

  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


}
