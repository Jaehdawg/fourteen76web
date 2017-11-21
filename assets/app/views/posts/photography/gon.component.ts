import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-gon',
  templateUrl: './templates/photography.component.html'
})

export class Gon implements OnInit {
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
  issocial: boolean = false;

  postTitle = "'Gon";
  postSubtitle = "Jonathan Patrick";

  description = [
    "Taken in Oregon during the summer of 2016. A typically American foray through the monolithic beauty in this land. Some of the life captured in these shots has suffered severe damage due to forest fires in the past week, namely those of the Columbia River Gorge. Amidst wildfires on the west coast, Hurricane Harvey, other forecasted natural catastrophes, and the ruling political party actively denying the proven science of climate change, one could ask, will the American road trip remain so typical when there's nothing left to see?",
    "Regardless of whether a freak teenager fireworks accident or climate change is to blame, both cases point to the same collective negligence of an environment dwindling brightly before our eyes. See it while you can and then die. It's either that or do something about it."
  ]

  constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/gon/one.jpg',
      '/images/photography/gon/two.jpg',
      '/images/photography/gon/three.jpg',
      '/images/photography/gon/four.jpg',
      '/images/photography/gon/five.jpg',
      '/images/photography/gon/seven.jpg',
      '/images/photography/gon/eight.jpg'
    ]
  }
}
