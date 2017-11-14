import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-die',
  templateUrl: './templates/dietrying.component.html'
})

export class DieTrying implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "DIE TRYING";
  postSubtitle = "sniperstreets";
  postDescriptionOne = "Zero Skate Team's United States of Whatever summer tour stop, in Birmingham, AL on July 25, 2017. The entire 3 part series can be viewed";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/dietrying/one.jpg',
      '/images/photography/dietrying/two.jpg',
      '/images/photography/dietrying/three.jpg',
      '/images/photography/dietrying/four.jpg',
      '/images/photography/dietrying/five.jpg',
      '/images/photography/dietrying/six.jpg',
      '/images/photography/dietrying/seven.jpg',
      '/images/photography/dietrying/eight.jpg',
      '/images/photography/dietrying/nine.jpg'
    ]
  }
}
