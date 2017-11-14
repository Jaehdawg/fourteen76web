import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-endangered',
  templateUrl: './templates/endangered.component.html'
})

export class Endangered implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Endangered Species";
  postSubtitle = "Josh Ethan Johnson";
  postDescription = "Endangered Species is a collection of photographs by Josh Ethan Johnson taken over a 16 year period. The book is a study in the speed and impermanence culture. While most of the photos are taken in America and NYC specifically, the book is more a look at human behavior and culture versus countries.";
  postDescriptionTwo = "Curated from thousands of of photographs, Josh methodically documented interesting and rare people, places, and things with these themes in mind. Some subjects were the last remaining of their respective archetype and are already gone. Others may soon be. Endangered Species attempts to both preserve as well as juxtapose them against the current trends people are likely blind to.";
  postDescriptionThree = "This is the first installment of many more Endangered Species to come";
  postDescriptionFour = "Josh Ethan Johnson lives in NYC and makes his living as a photographer, musician and videographer. Josh created a music video for his band Estate which is comprised of his street photographs. This video for \"Tendency\" won him a Vimeo Staff Pick. Recently, Josh launched the documentary video series called FACES (facesÂ­-stories.com) which is about the people he comes across in his travels and their various lives. For his book launch, Josh organized and curated a group show with four other NYC street photographers. Over 250 people attended the opening and the following day, Josh assembled 10 creative people to give talks about their latest projects.";


 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/endangered/one.jpg',
      '/images/photography/endangered/two.jpg',
      '/images/photography/endangered/three.jpg',
      '/images/photography/endangered/four.jpg',
      '/images/photography/endangered/five.jpg',
      '/images/photography/endangered/six.jpg',
      '/images/photography/endangered/seven.jpg',
      '/images/photography/endangered/eight.jpg',
      '/images/photography/endangered/nine.jpg',
      '/images/photography/endangered/ten.jpg',
      '/images/photography/endangered/eleven.jpg',
      '/images/photography/endangered/twelve.jpg',
      '/images/photography/endangered/thirteen.jpg',
      '/images/photography/endangered/fourteen.jpg',
      '/images/photography/endangered/fifteen.jpg',
      '/images/photography/endangered/sixteen.jpg',
      '/images/photography/endangered/seventeen.jpg',
      '/images/photography/endangered/nineteen.jpg',
      '/images/photography/endangered/twenty.jpg'
    ]
  }
}