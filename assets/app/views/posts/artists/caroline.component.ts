import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Caroline implements OnInit {
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
      '/images/artists/caroline/one.jpg',
      '/images/artists/caroline/two.jpg',
      '/images/artists/caroline/three.jpg',
      '/images/artists/caroline/four.jpg',
      '/images/artists/caroline/five.jpg',
      '/images/artists/caroline/six.jpg',
      '/images/artists/caroline/seven.jpg',
      '/images/artists/caroline/eight.jpg',
      '/images/artists/caroline/nine.jpg',
      '/images/artists/caroline/ten.jpg'
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
  isphotoDescription: boolean = true;
  issocial: boolean = true;

  postTitle = 'Carolie Erb';
  photoDescription = "I use my art as a coping mechanism - it helps me process overwhelming or uncomfortable emotions. A constant theme for me is trying to find a balance between vulnerability and vagueness. I seesaw a lot between emotional transparency and distance, and am currently re-examing what it is I want to reveal in my art. People have used the word \"intimate\" quite frequently to describe what I do, and I think it makes some people uncomfortable to see art like mine in public spaces."

  socials = [
    {
      description: "oddbirditems etsy",
      url: "https://www.etsy.com/shop/oddbirditems",
      img: "/images/icons/website.png"
    }
  ];

  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


}
