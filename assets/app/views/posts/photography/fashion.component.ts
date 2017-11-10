import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-fashion',
  templateUrl: './templates/fashion.component.html'
})

export class Fashion implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Birmingham Fashion Week";
  postSubtitle = "Mateo Montoya";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/fashionweek/twelve.jpg',
      '/images/photography/fashionweek/one.jpg',
      '/images/photography/fashionweek/two.jpg',
      '/images/photography/fashionweek/three.jpg',
      '/images/photography/fashionweek/four.jpg',
      '/images/photography/fashionweek/five.jpg',
      '/images/photography/fashionweek/six.jpg',
      '/images/photography/fashionweek/thirteen.jpg',
      '/images/photography/fashionweek/fourteen.jpg',
      '/images/photography/fashionweek/fifteen.jpg',
      '/images/photography/fashionweek/sixteen.jpg',
      '/images/photography/fashionweek/seventeen.jpg',
      '/images/photography/fashionweek/eighteen.jpg',
      '/images/photography/fashionweek/nineteen.jpg',
      '/images/photography/fashionweek/twenty.jpg',
      '/images/photography/fashionweek/twentyone.jpg',
      '/images/photography/fashionweek/twentytwo.jpg',
      '/images/photography/fashionweek/twentythree.jpg',
      '/images/photography/fashionweek/twentyfour.jpg',
      '/images/photography/fashionweek/seven.jpg',
      '/images/photography/fashionweek/eight.jpg',
      '/images/photography/fashionweek/nine.jpg',
      '/images/photography/fashionweek/ten.jpg',
      '/images/photography/fashionweek/eleven.jpg'
    ]
  }
}
