import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-malverns',
  templateUrl: './templates/malverns.component.html'
})

export class Malverns implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "The Malverns";
  postSubtitle = "Ted Homer";

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/malverns/one.jpg',
      '/images/photography/malverns/two.jpg',
      '/images/photography/malverns/three.jpg',
      '/images/photography/malverns/four.jpg',
      '/images/photography/malverns/five.jpg',
      '/images/photography/malverns/six.jpg',
      '/images/photography/malverns/seven.jpg',
      '/images/photography/malverns/eight.jpg',
      '/images/photography/malverns/nine.jpg',
      '/images/photography/malverns/ten.jpg',
      '/images/photography/malverns/eleven.jpg',
      '/images/photography/malverns/twelve.jpg'
    ]
  }
}
