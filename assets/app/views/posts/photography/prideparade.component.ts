import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-pride',
  templateUrl: './templates/prideparade.component.html'
})

export class PrideParade implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Pride Parade and Fest";
  postSubtitle = "Mateo Montoya";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/pride/one.jpg',
      '/images/photography/pride/two.jpg',
      '/images/photography/pride/three.jpg',
      '/images/photography/pride/four.jpg',
      '/images/photography/pride/five.jpg',
      '/images/photography/pride/six.jpg',
      '/images/photography/pride/seven.jpg',
      '/images/photography/pride/eight.jpg',
      '/images/photography/pride/nine.jpg',
      '/images/photography/pride/ten.jpg',
      '/images/photography/pride/eleven.jpg',
      '/images/photography/pride/twelve.jpg',
      '/images/photography/pride/thirteen.jpg',
      '/images/photography/pride/fourteen.jpg',
      '/images/photography/pride/fifteen.jpg',
      '/images/photography/pride/sixteen.jpg',
      '/images/photography/pride/seventeen.jpg',
      '/images/photography/pride/eighteen.jpg',
      '/images/photography/pride/nineteen.jpg',
      '/images/photography/pride/twenty.jpg',
      '/images/photography/pride/twentyone.jpg',
      '/images/photography/pride/twentytwo.jpg'
    ]
  }
}
