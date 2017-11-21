import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-generation',
  templateUrl: './templates/photography.component.html'
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

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = true;
  isphotoDescription: boolean = false;
  issocial: boolean = true;

  postTitle = "The Last Generation";
  postSubtitle = "Eduardo Urbina";

  socials = [
    {
      description: "indigenousone",
      url: "https://www.instagram.com/indigenousone/",
      img: "/images/icons/insta.png"
    }
  ]

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
