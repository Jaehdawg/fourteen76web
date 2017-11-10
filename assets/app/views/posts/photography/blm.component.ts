import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-blm',
  templateUrl: './templates/blm.component.html'
})

export class Blm implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Black Lives Matter Birmingham";
  postSubtitle = "Mateo Montoya";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/blm/one.jpg',
      '/images/photography/blm/two.jpg',
      '/images/photography/blm/three.jpg',
      '/images/photography/blm/four.jpg',
      '/images/photography/blm/five.jpg',
      '/images/photography/blm/six.jpg',
      '/images/photography/blm/seven.jpg',
      '/images/photography/blm/eight.jpg',
      '/images/photography/blm/nine.jpg',
      '/images/photography/blm/ten.jpg',
      '/images/photography/blm/eleven.jpg',
      '/images/photography/blm/twelve.jpg',
      '/images/photography/blm/thirteen.jpg',
      '/images/photography/blm/fourteen.jpg'

    ]
  }
}
