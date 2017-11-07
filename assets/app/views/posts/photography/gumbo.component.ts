import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-gumbo',
  templateUrl: './templates/gumbo.component.html'
})

export class Gumbo implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Gumbo Gala";
  postSubtitle = "Lee Panter"

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/gumbo/one.jpg',
      '/images/photography/gumbo/two.jpg',
      '/images/photography/gumbo/three.jpg',
      '/images/photography/gumbo/four.jpg',
      '/images/photography/gumbo/five.jpg',
      '/images/photography/gumbo/six.jpg',
      '/images/photography/gumbo/seven.jpg',
      '/images/photography/gumbo/eight.jpg',
      '/images/photography/gumbo/nine.jpg',
      '/images/photography/gumbo/ten.jpg',
      '/images/photography/gumbo/eleven.jpg',
      '/images/photography/gumbo/twelve.jpg',
      '/images/photography/gumbo/thirteen.jpg',
      '/images/photography/gumbo/fourteen.jpg',
      '/images/photography/gumbo/fifteen.jpg',
      '/images/photography/gumbo/sixteen.jpg'
    ]
  }
}
