import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-byron',
  templateUrl: './templates/photography.component.html'
})

export class Byron implements OnInit {
  constructor(private titleService: Title) { }

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

  postTitle = "Byron Sonnier";
  postSubtitle = "Photo Story";

  socials = [
    {
      description: 'byronsonnier.org',
      url: 'http://www.byronsonnier.org/',
      img: '/images/icons/website.png'
    },
    {
      description: 'byronsonnier',
      url: 'https://www.instagram.com/byronsonnier/',
      img: '/images/icons/insta.png'
    }
  ]

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/byron/one.jpg',
      '/images/photography/byron/two.jpg',
      '/images/photography/byron/three.jpg',
      '/images/photography/byron/four.jpg',
      '/images/photography/byron/five.jpg',
      '/images/photography/byron/six.jpg'
    ]
  }
}
