import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-twilight',
  templateUrl: './templates/photography.component.html'
})

export class Twilight implements OnInit {
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

  postTitle = "Twilight Children";
  postSubtitle = "Chris Berntsen";

  socials = [
      {
        description: 'chrisberntsen.com',
        url: 'http://chrisberntsen.com/',
        img: '/images/icons/website.png'
      },
      {
        description: 'chris.berntsen',
        url: 'https://www.instagram.com/chris.berntsen/',
        img: '/images/icons/insta.png'
      },
  ]

  constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/twilight/one.jpg',
      '/images/photography/twilight/two.jpg',
      '/images/photography/twilight/three.jpg',
      '/images/photography/twilight/four.jpg',
      '/images/photography/twilight/five.jpg',
      '/images/photography/twilight/seven.jpg',
      '/images/photography/twilight/eight.jpg',
      '/images/photography/twilight/nine.jpg',
      '/images/photography/twilight/ten.jpg',
      '/images/photography/twilight/eleven.jpg',
      '/images/photography/twilight/twelve.jpg',
      '/images/photography/twilight/thirteen.jpg'

    ]
  }
}
