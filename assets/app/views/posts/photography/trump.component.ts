import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-trump',
  templateUrl: './templates/trump.component.html'
})

export class Trump implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Rally Against Donald Trump";
  postSubtitle = "Mateo Montoya"

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/trump/one.jpg',
      '/images/photography/trump/two.jpg',
      '/images/photography/trump/three.jpg',
      '/images/photography/trump/four.jpg',
      '/images/photography/trump/five.jpg',
      '/images/photography/trump/six.jpg',
      '/images/photography/trump/seven.jpg',
      '/images/photography/trump/eight.jpg',
      '/images/photography/trump/nine.jpg',
      '/images/photography/trump/ten.jpg',
      '/images/photography/trump/eleven.jpg',
      '/images/photography/trump/twelve.jpg',
      '/images/photography/trump/thirteen.jpg',
      '/images/photography/trump/fourteen.jpg',
      '/images/photography/trump/fifteen.jpg',
      '/images/photography/trump/sixteen.jpg',
      '/images/photography/trump/seventeen.jpg',
      '/images/photography/trump/eighteen.jpg',
      '/images/photography/trump/nineteen.jpg',
      '/images/photography/trump/twenty.jpg'
    ]
  }
}
