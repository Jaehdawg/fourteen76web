import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-aerius',
  templateUrl: './templates/aerius.component.html'
})

export class Aerius implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Aerius";
  postSubtitle = "Mateo Montoya";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/aerius/one.jpg',
      '/images/photography/aerius/two.jpg',
      '/images/photography/aerius/three.jpg',
      '/images/photography/aerius/four.jpg',
      '/images/photography/aerius/five.jpg',
      '/images/photography/aerius/six.jpg',
      '/images/photography/aerius/seven.jpg',
      '/images/photography/aerius/eight.jpg',
      '/images/photography/aerius/nine.jpg',
      '/images/photography/aerius/ten.jpg',
      '/images/photography/aerius/eleven.jpg'
    ]
  }
}
