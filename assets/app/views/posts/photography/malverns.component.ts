import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-malverns',
  templateUrl: './templates/photography.component.html'
})

export class Malverns implements OnInit {
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

  postTitle = "The Malverns";
  postSubtitle = "Ted Homer";

  socials = [
    {
      description: "tedhomer.co.uk",
      url: "http://www.tedhomer.co.uk/",
      img: "/images/icons/website.png"
    },
    {
      description: "tedhomer1",
      url: "https://www.instagram.com/tedhomer1/",
      img: "/images/icons/insta.png"
    }
  ];

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/malverns/one.jpg',
      '/images/photography/malverns/two.jpg',
      '/images/photography/malverns/three.jpg',
      '/images/photography/malverns/four.jpg',
      '/images/photography/malverns/five.jpg',
      '/images/photography/malverns/six.jpg',
      '/images/photography/malverns/seven.jpg',
      '/images/photography/malverns/eight.jpg',
      '/images/photography/malverns/nine.jpg',
      '/images/photography/malverns/ten.jpg',
      '/images/photography/malverns/eleven.jpg',
      '/images/photography/malverns/twelve.jpg'
    ]
  }
}
