import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-laundry',
  templateUrl: './templates/photography.component.html'
})

export class LaundryPunk implements OnInit {
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

  postTitle = "Laundry Punk";
  postSubtitle = "Mateo Montoya";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/laundrypunk/one.jpg',
      '/images/photography/laundrypunk/two.jpg',
      '/images/photography/laundrypunk/three.jpg',
      '/images/photography/laundrypunk/four.jpg',
      '/images/photography/laundrypunk/five.jpg',
      '/images/photography/laundrypunk/six.jpg'
    ]
  }
}
