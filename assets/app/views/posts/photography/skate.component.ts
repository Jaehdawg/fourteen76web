import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-skate',
  templateUrl: './templates/skate.component.html'
})

export class Skate implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Skate";
  postSubtitle = "David Sheetz";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/skate/one.jpg',
      '/images/photography/skate/two.jpg',
      '/images/photography/skate/three.jpg',
      '/images/photography/skate/four.jpg',
      '/images/photography/skate/five.jpg',
      '/images/photography/skate/six.jpg',
      '/images/photography/skate/seven.jpg',
      '/images/photography/skate/eight.jpg',
      '/images/photography/skate/nine.jpg',
      '/images/photography/skate/ten.jpg',
      '/images/photography/skate/eleven.jpg',
      '/images/photography/skate/twelve.jpg'
    ]
  }
}
