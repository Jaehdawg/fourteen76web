import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
import * as global from '../global';

@Component ({
  selector: 'app-dead',
  templateUrl: './templates/balloons.component.html'

})
export class DeadBalloons implements OnInit {
  constructor(private router: Router, private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: "Honest, non-ironic rock n'roll is scant these days. Understandably, in the past, tongue-in-cheek, cleverly quick to quip lyricists have stood out above other grains by going against them. There is a point in every day, however, when all the sunflowers see the sun and they face the same direction, trying to soak up the most light like all the rest around them. And however many have tried, let’s be real, not every lyricists is a natural Stephen Malkmus or Fiona Apple. So when the flood of angst-ful assholes becomes emboldened by the stand apart, clever few among them, the lyrical atmosphere tied to snark-rock starts feeling overly pushy and loses its initial shimmer. The Dead Balloons’ self-titled first full length avoids the allure of cool, producing a true-to-self, however scattered, rock n’roll effort."},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: "Honest, non-ironic rock n'roll is scant these days. Understandably, in the past, tongue-in-cheek, cleverly quick to quip lyricists have stood out above other grains by going against them. There is a point in every day, however, when all the sunflowers see the sun and they face the same direction, trying to soak up the most light like all the rest around them. And however many have tried, let’s be real, not every lyricists is a natural Stephen Malkmus or Fiona Apple. So when the flood of angst-ful assholes becomes emboldened by the stand apart, clever few among them, the lyrical atmosphere tied to snark-rock starts feeling overly pushy and loses its initial shimmer. The Dead Balloons’ self-titled first full length avoids the allure of cool, producing a true-to-self, however scattered, rock n’roll effort."},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'deadballons.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: "Honest, non-ironic rock n'roll is scant these days. Understandably, in the past, tongue-in-cheek, cleverly quick to quip lyricists have stood out above other grains by going against them. There is a point in every day, however, when all the sunflowers see the sun and they face the same direction, trying to soak up the most light like all the rest around them. And however many have tried, let’s be real, not every lyricists is a natural Stephen Malkmus or Fiona Apple. So when the flood of angst-ful assholes becomes emboldened by the stand apart, clever few among them, the lyrical atmosphere tied to snark-rock starts feeling overly pushy and loses its initial shimmer. The Dead Balloons’ self-titled first full length avoids the allure of cool, producing a true-to-self, however scattered, rock n’roll effort."},
      {name: 'twitter:image', content: global.shareImgUrl + 'amy.jpg'}
    ])
  }



  postTitle = 'Review of Dead Balloons';
  postImage = "/images/headImages/deadballoons.jpg";
  postImageTwo = "/images/postImages/balloons1.jpg";
  postImageThree = "/images/postImages/balloons2.jpg";
  postSubtitle = "By Eugene Yess";
  postSubtitlePhoto = "Photography by Mateo Montoya";

  pageUrl: string = 'DeadBalloons';
  shareTitle: string = 'Dead%20Balloons';

  shareFacebook = global.faceShare + this.pageUrl;

  shareTwitter = "";
  hastags = "";

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
