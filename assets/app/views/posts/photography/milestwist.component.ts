import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-milestwist',
  templateUrl: './templates/milestwist.component.html'
})

export class MilesTwist implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Miles Twist";
  postSubtitle = "Photo Story";

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/milestwist/one.jpg',
      '/images/photography/milestwist/two.jpg',
      '/images/photography/milestwist/three.jpg',
      '/images/photography/milestwist/four.jpg',
      '/images/photography/milestwist/five.jpg',
      '/images/photography/milestwist/six.jpg',
      '/images/photography/milestwist/seven.jpg',
      '/images/photography/milestwist/eight.jpg'
    ]
  }
}
