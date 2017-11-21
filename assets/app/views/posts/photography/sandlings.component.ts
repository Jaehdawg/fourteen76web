import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-sand',
  templateUrl: './templates/photography.component.html'
})

export class Sandlings implements OnInit {
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

  postTitle = "Sandlings";
  postSubtitle = "Alastair Bartlett";
  description = [
    "'This work intertwines my childhood memories and the innate need to document my surroundings. Going out and making this work allows me to reconnect with the feeling of adventure I had growing up in the Suffolk countryside. The images hint at a subtle balance between intrigue and fear. Each of the pictures aims to send the viewer on a journey through the past and future of the moment of capture.'"
  ]

  socials = [
    {
      description: "alastairbartlett.com",
      url: "http://www.alastairbartlett.com/",
      img: "/images/icons/website.png"
    },
    {
      description: "alastair_bartlett",
      url: "https://www.instagram.com/alastair_bartlett/",
      img: "/images/icons/insta.png"
    }
  ];

  constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/sandlings/one.jpg',
      '/images/photography/sandlings/two.jpg',
      '/images/photography/sandlings/three.jpg',
      '/images/photography/sandlings/four.jpg',
      '/images/photography/sandlings/five.jpg',
      '/images/photography/sandlings/seven.jpg'
    ]
  }
}
