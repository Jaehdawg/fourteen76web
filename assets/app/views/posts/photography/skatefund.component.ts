import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-skate',
  templateUrl: './templates/blm.component.html'
})

export class SkateFund implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Skate Park Fundraiser";
  postSubtitle = "Mateo Montoya";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/skatefund/one.jpg',
      '/images/photography/skatefund/three.jpg',
      '/images/photography/skatefund/four.jpg',
      '/images/photography/skatefund/five.jpg',
      '/images/photography/skatefund/six.jpg',
      '/images/photography/skatefund/seven.jpg',
      '/images/photography/skatefund/eight.jpg',
      '/images/photography/skatefund/nine.jpg',
      '/images/photography/skatefund/ten.jpg',
      '/images/photography/skatefund/eleven.jpg',
      '/images/photography/skatefund/twelve.jpg',
      '/images/photography/skatefund/thirteen.jpg',
      '/images/photography/skatefund/fourteen.jpg',
      '/images/photography/skatefund/fifteen.jpg',
      '/images/photography/skatefund/sixteen.jpg',
      '/images/photography/skatefund/seventeen.jpg',
      '/images/photography/skatefund/eighteen.jpg'
    ]
  }
}
