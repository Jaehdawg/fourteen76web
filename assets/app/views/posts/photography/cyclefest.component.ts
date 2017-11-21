import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-cycle',
  templateUrl: './templates/photography.component.html'
})

export class CycleFest implements OnInit {
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

  postTitle = "Cycle Fest 2016";
  postSubtitle = "Mateo Montoya";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/cyclefest/one.jpg',
      '/images/photography/cyclefest/two.jpg',
      '/images/photography/cyclefest/three.jpg',
      '/images/photography/cyclefest/four.jpg',
      '/images/photography/cyclefest/five.jpg',
      '/images/photography/cyclefest/six.jpg',
      '/images/photography/cyclefest/seven.jpg',
      '/images/photography/cyclefest/eight.jpg',
      '/images/photography/cyclefest/ten.jpg',
      '/images/photography/cyclefest/twelve.jpg',
      '/images/photography/cyclefest/thirteen.jpg',
      '/images/photography/cyclefest/seventeen.jpg',
      '/images/photography/cyclefest/eighteen.jpg',
      '/images/photography/cyclefest/nineteen.jpg',
      '/images/photography/cyclefest/twenty.jpg',
      '/images/photography/cyclefest/nine.jpg',
      '/images/photography/cyclefest/fourteen.jpg',
      '/images/photography/cyclefest/fifteen.jpg',
      '/images/photography/cyclefest/sixteen.jpg'
    ]
  }
}
