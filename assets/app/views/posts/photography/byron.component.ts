import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-byron',
  templateUrl: './templates/byron.component.html'
})

export class Byron implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Byron Sonnier";
  postSubtitle = "Photo Story";

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/byron/one.jpg',
      '/images/photography/byron/two.jpg',
      '/images/photography/byron/three.jpg',
      '/images/photography/byron/four.jpg',
      '/images/photography/byron/five.jpg',
      '/images/photography/byron/six.jpg'
    ]
  }
}
