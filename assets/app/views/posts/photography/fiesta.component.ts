import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-fiesta',
  templateUrl: './templates/photography.component.html'
})

export class Fiesta implements OnInit {
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
  issocial: boolean = false;

  postTitle = "Fiesta Birmingham 2016";
  postSubtitle = "Mateo Montoya";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/fiesta/one.jpg',
      '/images/photography/fiesta/two.jpg',
      '/images/photography/fiesta/three.jpg',
      '/images/photography/fiesta/four.jpg',
      '/images/photography/fiesta/five.jpg',
      '/images/photography/fiesta/six.jpg',
      '/images/photography/fiesta/seven.jpg',
      '/images/photography/fiesta/eight.jpg',
      '/images/photography/fiesta/nine.jpg',
      '/images/photography/fiesta/ten.jpg',
      '/images/photography/fiesta/eleven.jpg',
      '/images/photography/fiesta/twelve.jpg',
      '/images/photography/fiesta/thirteen.jpg',
      '/images/photography/fiesta/fourteen.jpg',
      '/images/photography/fiesta/fifteen.jpg',
      '/images/photography/fiesta/sixteen.jpg',
      '/images/photography/fiesta/seventeen.jpg'
    ]
  }
}
