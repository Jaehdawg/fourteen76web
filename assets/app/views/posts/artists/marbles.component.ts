import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Marbles implements OnInit {
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
      '/images/artists/marbles/one.jpg',
      '/images/artists/marbles/two.jpg',
      '/images/artists/marbles/three.jpg',
      '/images/artists/marbles/four.jpg',
      '/images/artists/marbles/five.jpg',
      '/images/artists/marbles/six.jpg',
      '/images/artists/marbles/seven.jpg'
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

  postTitle = 'Mr. Marbles';

  socials = [
    {
      description: "mrmarblesart",
      url: "https://www.instagram.com/mrmarblesart/",
      img: "/images/icons/insta.png"
    }
  ];

  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


}
