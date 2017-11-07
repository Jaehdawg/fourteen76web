import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-ghouls',
  templateUrl: './templates/ghouls.component.html'
})

export class Ghouls implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Murdered by Ghouls";
  postSubtitle = "Andrew Dominguez";
  postDescriptionOne = "The timelapse was photographed in February 2017 by Andrew Dominguez. Shot across four Mexico City boroughs; Polanco, Roma norte, Chapultepec, & Condesa.";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/ghouls/one.jpg',
      '/images/photography/ghouls/two.jpg',
      '/images/photography/ghouls/three.jpg',
      '/images/photography/ghouls/four.jpg',
      '/images/photography/ghouls/five.jpg',
      '/images/photography/ghouls/seven.jpg',
      '/images/photography/ghouls/eight.jpg'
    ]
  }
}
