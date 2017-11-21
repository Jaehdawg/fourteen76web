import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-die',
  templateUrl: './templates/photography.component.html'
})

export class DieTrying implements OnInit {
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

  postTitle = "DIE TRYING";
  postSubtitle = "sniperstreets";
  description = [
    "Zero Skate Team's United States of Whatever summer tour stop, in Birmingham, AL on July 25, 2017. The entire 3 part series can be viewed"
  ]
  socials = [
    {
      description: "sniperstreets.com",
      url: "https://www.sniperstreets.com/",
      img: "/images/icons/website.png"
    },
    {
      description: "sniperstreets",
      url: "https://www.instagram.com/sniperstreets/",
      img: "/images/icons/insta.png"
    }
  ];

  constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/dietrying/one.jpg',
      '/images/photography/dietrying/two.jpg',
      '/images/photography/dietrying/three.jpg',
      '/images/photography/dietrying/four.jpg',
      '/images/photography/dietrying/five.jpg',
      '/images/photography/dietrying/six.jpg',
      '/images/photography/dietrying/seven.jpg',
      '/images/photography/dietrying/eight.jpg',
      '/images/photography/dietrying/nine.jpg'
    ]
  }
}
