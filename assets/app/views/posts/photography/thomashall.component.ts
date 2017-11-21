import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-thomashall',
  templateUrl: './templates/photography.component.html'
})

export class ThomasHall implements OnInit {
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
  isphotoDescription: boolean = false;
  issocial: boolean = true;

  postTitle = "Thomas Hall";
  postSubtitle = "Photo Story";

  socials = [
    {
      description: 'thfilm22',
      url: 'https://www.instagram.com/thfilm22/',
      img: '/images/icons/insta.png'
    }
  ]

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/thomashall/one.jpg',
      '/images/photography/thomashall/two.jpg',
      '/images/photography/thomashall/three.jpg',
      '/images/photography/thomashall/four.jpg',
      '/images/photography/thomashall/five.jpg',
      '/images/photography/thomashall/six.jpg',
      '/images/photography/thomashall/nine.jpg',
      '/images/photography/thomashall/eight.jpg'
    ]
  }
}
