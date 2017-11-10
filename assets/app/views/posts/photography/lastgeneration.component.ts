import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-generation',
  templateUrl: './templates/lastgeneration.component.html'
})

export class LastGeneration implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "The Last Generation";
  postSubtitle = "Eduardo Urbina";

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/lastgeneration/one.jpg',
      '/images/photography/lastgeneration/two.jpg',
      '/images/photography/lastgeneration/three.jpg',
      '/images/photography/lastgeneration/four.jpg',
      '/images/photography/lastgeneration/five.jpg',
      '/images/photography/lastgeneration/six.jpg'
    ]
  }
}
