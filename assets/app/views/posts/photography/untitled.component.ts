import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-untitled',
  templateUrl: './templates/untitled.component.html'
})

export class Untitled implements OnInit {
  postTitle = "Untitled";
  postSubtitle = "Andrew Dominguez";
  postImageOne = "/images/photography/untitled/one.jpg";
  postImageTwo = "/images/photography/untitled/two.jpg";
  postImageThree = "/images/photography/untitled/three.jpg";
  postImageFour = "/images/photography/untitled/four.jpg";
  postImageFive = "/images/photography/untitled/five.jpg";
  postImageSix = "/images/photography/untitled/six.jpg";
  postImageSeven = "/images/photography/untitled/seven.jpg";
  postImageEight = "/images/photography/untitled/eight.jpg";
  postImageNine = "/images/photography/untitled/nine.jpg";
  postImageTen = "/images/photography/untitled/ten.jpg";
  postImageEleven = "/images/photography/untitled/eleven.jpg";
  postImageTwelve = "/images/photography/untitled/twelve.jpg";

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
  }
}
