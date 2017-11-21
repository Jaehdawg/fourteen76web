import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-twelve',
  templateUrl: './templates/photography.component.html'
})

export class Twelve implements OnInit {
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
  isSocial: boolean = true;

  postTitle = "Twelve Weeks of Winter";
  postSubtitle = "Antonio Rodriguez";


 constructor(private titleService: Title) { }

 socials = [
   {
     description: "flickr",
     url: "https://www.flickr.com/photos/100789145@N07/albums",
     img: "/images/icons/website.png"
   }
 ];

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/twelvewinter/one.jpg',
      '/images/photography/twelvewinter/two.jpg',
      '/images/photography/twelvewinter/three.jpg',
      '/images/photography/twelvewinter/four.jpg',
      '/images/photography/twelvewinter/five.jpg',
      '/images/photography/twelvewinter/six.jpg',
      '/images/photography/twelvewinter/seven.jpg',
      '/images/photography/twelvewinter/eight.jpg',
      '/images/photography/twelvewinter/nine.jpg',
      '/images/photography/twelvewinter/ten.jpg',
      '/images/photography/twelvewinter/eleven.jpg',
      '/images/photography/twelvewinter/twelve.jpg'
    ]
  }

}
