import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-nonames',
  templateUrl: './templates/nonames.component.html'
})

export class NoNames implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Where The Street Have No Names";
  postSubtitle = "Tyron Hug";

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/nonames/one.jpg',
      '/images/photography/nonames/two.jpg',
      '/images/photography/nonames/three.jpg',
      '/images/photography/nonames/four.jpg',
      '/images/photography/nonames/five.jpg',
      '/images/photography/nonames/six.jpg',
      '/images/photography/nonames/seven.jpg',
      '/images/photography/nonames/eight.jpg'
    ]
  }
}
