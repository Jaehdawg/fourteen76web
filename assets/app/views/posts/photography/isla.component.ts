import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-isla',
  templateUrl: './templates/photography.component.html'
})

export class Isla implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = true;
  isphotoDescription: boolean = true;
  issocial: boolean = true;

  postTitle = "Isla De Magia";
  postSubtitle = "Camila Escobar";

  description = [
    "I've been to Providencia twice, each time has been different, but what has remained is the magic that lives within. Here is a small selection of photographs that I took around this timeless and enchanting place."
  ]

  socials = [
    {
      description: 'camilaescobarphotography.com',
      url: 'http://camilaescobarphotography.com/',
      img: '/images/icons/website.png'
    },
    {
      description: 'cescobarll',
      url: 'https://www.instagram.com/cescobarll/',
      img: '/images/icons/insta.png'
    }
  ]

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/isla/one.jpg',
      '/images/photography/isla/two.jpg',
      '/images/photography/isla/three.jpg',
      '/images/photography/isla/four.jpg',
      '/images/photography/isla/five.jpg',
      '/images/photography/isla/seven.jpg',
      '/images/photography/isla/eight.jpg',
      '/images/photography/isla/nine.jpg',
      '/images/photography/isla/ten.jpg',
      '/images/photography/isla/eleven.jpg',
      '/images/photography/isla/twelve.jpg',
      '/images/photography/isla/thirteen.jpg'

    ]
  }
}
