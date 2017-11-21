import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-nonames',
  templateUrl: './templates/photography.component.html'
})

export class NoNames implements OnInit {
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

  postTitle = "Where The Street Have No Names";
  postSubtitle = "Tyron Hug";

  socials = [
    {
      description: 'ahuglife.tumblr',
      url: 'http://ahuglife.tumblr.com/',
      img: '/images/icons/website.png'
    },
    {
      description: 't_hug',
      url: 'https://www.instagram.com/t_hug/',
      img: '/images/icons/insta.png'
    }
  ]

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/nonames/one.jpg',
      '/images/photography/nonames/two.jpg',
      '/images/photography/nonames/three.jpg',
      '/images/photography/nonames/four.jpg',
      '/images/photography/nonames/five.jpg',
      '/images/photography/nonames/six.jpg',
      '/images/photography/nonames/seven.jpg',
      '/images/photography/nonames/eight.jpg'
    ]
  }
}
