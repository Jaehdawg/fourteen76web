import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-newyork',
  templateUrl: './templates/photography.component.html'
})

export class NewYork implements OnInit {
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
  isphotoDescription: boolean = true;
  issocial: boolean = true;

  postTitle = "New York Perspectives";
  postSubtitle = "Victoria Vrublevska";

  socials = [
      {
        description: "victoriavrublevska.vimeo",
        url: "https://vimeo.com/victoriavrublevska",
        img: "/images/icons/website.png"
      },
      {
        description: "victoriavrublevska",
        url: "https://www.instagram.com/victoriavrublevska/",
        img: "/images/icons/insta.png"
      }
  ];

  description = [
    "'New York City Perspectives' is an attempt to capture cinematic qualities of New York - breathtaking perspectives, grand architecture and constant movement of the city that never sleeps."
  ]




 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/newyork/one.jpg',
      '/images/photography/newyork/two.jpg',
      '/images/photography/newyork/three.jpg',
      '/images/photography/newyork/four.jpg',
      '/images/photography/newyork/five.jpg',
      '/images/photography/newyork/seven.jpg',
      '/images/photography/newyork/eight.jpg',
      '/images/photography/newyork/nine.jpg',
      '/images/photography/newyork/ten.jpg',
      '/images/photography/newyork/eleven.jpg'
    ]
  }
}
