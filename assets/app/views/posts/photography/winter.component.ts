import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-winter',
  templateUrl: './templates/winter.component.html'
})

export class Winter implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Wisconsin Winter";
  postSubtitle = "Callie Mills";

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/wisconsin/one.jpg',
      '/images/photography/wisconsin/two.jpg',
      '/images/photography/wisconsin/three.jpg',
      '/images/photography/wisconsin/four.jpg',
      '/images/photography/wisconsin/five.jpg',
      '/images/photography/wisconsin/six.jpg',
      '/images/photography/wisconsin/seven.jpg',
      '/images/photography/wisconsin/eight.jpg',
      '/images/photography/wisconsin/nine.jpg',
      '/images/photography/wisconsin/ten.jpg',
      '/images/photography/wisconsin/eleven.jpg'
    ]
  }
}
