import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-lost',
  templateUrl: './templates/photography.component.html'
})

export class LostLands implements OnInit {
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

  postTitle = "Lost Lands";
  postSubtitle = "Bryan Atkinson";

  description = [
    "Bryan Atkinson (b. 1979) is a native of Kansas City and still resides there today. His work is centered on street and documentary photography. He first became interested in the medium after taking a film photography class in high school. Since then he has sought to document the environment around him. His work today focuses on the relationship between people and spaces, with a strong concentration on the urban landscapes of his native Kansas City, and the rural Midwest.",
    "The pieces in this series are from an ongoing photo project titled \"Lost Lands\". This project aims to present a vibrant and honest portrait of Kansas City's forgotten neighborhoods and landscapes. While downtown Kansas City has undergone a radical transformation over the last two decades, a large remainder of the urban core has largely been ignored. The project seeks to document these spaces before they are lost to time some ill planned urban renewal effort."
  ]

  socials = [
    {
      description: "bryanatkinson.co",
      url: "http://bryanatkinson.co/",
      img: "/images/icons/website.png"
    },
    {
      description: "bryan.816",
      url: "https://www.instagram.com/bryan.816/",
      img: "/images/icons/insta.png"
    }
  ];

  constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/lostlands/one.jpg',
      '/images/photography/lostlands/two.jpg',
      '/images/photography/lostlands/three.jpg',
      '/images/photography/lostlands/four.jpg',
      '/images/photography/lostlands/five.jpg',
      '/images/photography/lostlands/seven.jpg',
      '/images/photography/lostlands/eight.jpg',
      '/images/photography/lostlands/nine.jpg',
      '/images/photography/lostlands/ten.jpg',
      '/images/photography/lostlands/eleven.jpg',
      '/images/photography/lostlands/twelve.jpg',
      '/images/photography/lostlands/thirteen.jpg',
      '/images/photography/lostlands/fourteen.jpg'
    ]
  }
}
