import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-girl',
  templateUrl: './templates/article.component.html'

})
export class Girlpool implements OnInit {
  constructor(private titleService: Title) {}

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = true;
  ispostSubtitlePhoto: boolean = false;
  ispostImage: boolean = true;
  ispostImageTwo: boolean = false;
  isimageCaption: boolean = false;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = true;
  isqa1: boolean = true;
  isqa2: boolean = false;
  isphotoDescription: boolean = false;
  issocial: boolean = false;

  postTitle = 'Girlpool';
  postImage = "/images/headImages/girlpool.jpg";
  postSubtitle = "Interview by Blake Ells";

  preQIntro = [
    'Girlpool is Cleo Tucker and Harmony Tividad from Los Angeles. They began writing and playing music by themselves and added a drummer for the 2017 release Powerplant. Their sound has grown bigger since their debut, Before the World Was Big.',
    'They talked about that evolution, returning home and their inspiration.'
  ]

  qa1 = [
    {
      q: `What’s the Girlpool origin story?`,
      a: `Harmony Tividad: We were hanging out at The Smell—which is a DIY venue in L.A.—a lot and going to a lot of shows there. One day we met because we had a lot of mutual friends. We’d played in different bands and played shows together a lot; we became closer and closer and started to share songs we’d write and trade music and eventually started jamming out. And we decided to form a little project; that’s the beginnings of Girlpool.`
    },
    {
      q: `When was that?`,
      a: `HT: Late 2012-early 2013.`
    },
    {
      q: `What did those first jam sessions sound like? Did you begin playing covers together or did you start writing originals?`,
      a: `Cleo Tucker: We were experimenting with a bass guitar and guitar and vocal and seeing what we could get out of our element. That was exciting to us—seeing what we could get out of the instruments that we had. There was a lot of experimentation without a lot of instrumentation.`
    },
    {
      q: `When and why did you decide to add more instrumentation, like a drummer?`,
      a: `CT: We liked new music and we became inspired by ideas beyond those limitations. We wanted to work with playing with other sounds. It was organic.`
    },
    {
      q: `What brought you back to L.A. together?`,
      a: `CT: We just wanted to be back home. We knew that we were gonna do a lot of touring after this record came out and we knew Los Angeles. It felt like the right time to come back and work from here.`
    },
    {
      q: `Did you have a lot of family there?`,
      a: `HT: Yeah, we have family here and we’re close to them and it was good to be back.`
    },
    {
      q: `What inspires you?`,
      a: `HT: I don’t know if there’s anything that’s not inspiring. It’s a very big world and there’s a lot happening constantly and I feel like there’s no specific source of inspiration other than the fact that we’re just alive and observing the world around us and seeing things.`
    },
    {
      q: `Have you played the South before or will this be your first visit?`,
      a: `CT: We have, yeah. It’s cool. It’s humid!`
    },
    {
      q: `How have you found the people here? Are they inviting? Do they fit the stereotypes?`,
      a: `CT: We’ve only had pleasant experiences there.`
    },
    {
      q: `What can we expect from a Girlpool live show?`,
      a: `CT: Ecstasy. Sex, love, ecstasy.`
    }
  ]

  shareFacebook = "https://www.facebook.com/fourteen76/";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
  }
}
