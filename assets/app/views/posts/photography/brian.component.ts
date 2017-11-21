import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-brian',
  templateUrl: './templates/photography.component.html'
})

export class Brian implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = true;
  isphotoDescription: boolean = false;
  issocial: boolean = false;

  postTitle = "Brian Arnold";
  postSubtitle = "Photo Story";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/brian/one.jpg',
      '/images/photography/brian/two.jpg',
      '/images/photography/brian/three.jpg',
      '/images/photography/brian/four.jpg',
      '/images/photography/brian/five.jpg',
      '/images/photography/brian/six.jpg'
    ]
  }
}
