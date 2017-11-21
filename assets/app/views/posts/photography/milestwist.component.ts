import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-milestwist',
  templateUrl: './templates/photography.component.html'
})

export class MilesTwist implements OnInit {
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

  postTitle = "Miles Twist";
  postSubtitle = "Photo Story";

  socials = [
    {
      description: "sniperstreets.com",
      url: "https://www.sniperstreets.com/",
      img: "/images/icons/website.png"
    },
    {
      description: "milestwist",
      url: "https://www.instagram.com/milestwist/",
      img: "/images/icons/insta.png"
    }
  ];

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/milestwist/one.jpg',
      '/images/photography/milestwist/two.jpg',
      '/images/photography/milestwist/three.jpg',
      '/images/photography/milestwist/four.jpg',
      '/images/photography/milestwist/five.jpg',
      '/images/photography/milestwist/six.jpg',
      '/images/photography/milestwist/seven.jpg',
      '/images/photography/milestwist/eight.jpg'
    ]
  }
}
