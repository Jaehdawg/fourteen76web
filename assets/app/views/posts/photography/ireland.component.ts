import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-ireland',
  templateUrl: './templates/ireland.component.html'
})

export class Ireland implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Ireland";
  postSubtitle = "Rachel McElroy";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/ireland/one.jpg',
      '/images/photography/ireland/two.jpg',
      '/images/photography/ireland/three.jpg',
      '/images/photography/ireland/four.jpg',
      '/images/photography/ireland/five.jpg',
      '/images/photography/ireland/seven.jpg',
      '/images/photography/ireland/eight.jpg',
      '/images/photography/ireland/nine.jpg'
    ]
  }
}
