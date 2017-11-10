import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-twilight',
  templateUrl: './templates/twilight.component.html'
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

  postTitle = "Twilight Children";
  postSubtitle = "Chris Berntsen";


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
