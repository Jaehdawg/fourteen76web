import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-carrigans',
  templateUrl: './templates/carrigans.component.html'

})
export class CarrigansComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Jonathan Brennan can be a tough dude to track down. If he's not firing, slicing, smoking, sauteing, or braising, you might find him at the Haints' shop turning a wrench. Or you might not. That's because these two pseudo stationary moments are about as still as this guy gets, being known to skid from Birmingham to Long Beach, from Milwaukee to Colorado, on cross country rides in search of sights to behold and Ma and Pa spots worth adding to his bestiary. He and the caravan are, in his own words, "broke ass foodies, more or less."`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Jonathan Brennan can be a tough dude to track down. If he's not firing, slicing, smoking, sauteing, or braising, you might find him at the Haints' shop turning a wrench. Or you might not. That's because these two pseudo stationary moments are about as still as this guy gets, being known to skid from Birmingham to Long Beach, from Milwaukee to Colorado, on cross country rides in search of sights to behold and Ma and Pa spots worth adding to his bestiary. He and the caravan are, in his own words, "broke ass foodies, more or less."`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'carrigan.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Jonathan Brennan can be a tough dude to track down. If he's not firing, slicing, smoking, sauteing, or braising, you might find him at the Haints' shop turning a wrench. Or you might not. That's because these two pseudo stationary moments are about as still as this guy gets, being known to skid from Birmingham to Long Beach, from Milwaukee to Colorado, on cross country rides in search of sights to behold and Ma and Pa spots worth adding to his bestiary. He and the caravan are, in his own words, "broke ass foodies, more or less."`},
      {name: 'twitter:image', content: global.shareImgUrl + 'carrigan.jpg'}
    ])
  }



  postTitle = 'A Street Soul, Fine and Fried';
  postImage = "/images/headImages/carrigans.jpg";
  postImageTwo = "/images/postImages/carrigan.png";
  postImageThree = "/images/postImages/carrigan2.jpg";
  postImageFour = "/images/postImages/carrigan3.jpg";
  postImageFive = "/images/postImages/carrigan4.jpg";
  postImageSix = "/images/postImages/carrigan5.jpg";
  postImageSeven = "/images/postImages/carrigan6.jpg";
  postSubtitle = "By Jonathan Patrick";
  postSubtitlePhoto = "Photography by Mateo Montoya";

  pageUrl: string = 'StreetSoul';
  shareTitle: string = 'Street%20Soul%20Fine%20and%20Fried';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "food, chefinterview, carrigans";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }
}
