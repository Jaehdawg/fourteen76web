import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-joust',
  templateUrl: './templates/photography.component.html'
})

export class BikeJoust implements OnInit {
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

  postTitle = "Bike Joust V";
  postSubtitle = "Mateo Montoya"

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/joust/one.jpg',
      '/images/photography/joust/two.jpg',
      '/images/photography/joust/three.jpg',
      '/images/photography/joust/four.jpg',
      '/images/photography/joust/five.jpg',
      '/images/photography/joust/six.jpg',
      '/images/photography/joust/seven.jpg',
      '/images/photography/joust/eigth.jpg',
      '/images/photography/joust/nine.jpg',
      '/images/photography/joust/ten.jpg',
      '/images/photography/joust/eleven.jpg',
      '/images/photography/joust/twelve.jpg',
      '/images/photography/joust/thirteen.jpg',
      '/images/photography/joust/fourteen.jpg',
      '/images/photography/joust/fifteen.jpg',
      '/images/photography/joust/sixteen.jpg'
    ]
  }
}
