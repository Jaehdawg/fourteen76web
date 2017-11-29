import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Katelyn implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Artist Interview`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Artist Interview`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'katelyn.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Artist Interview`},
      {name: 'twitter:image', content: global.shareImgUrl + 'katelyn.jpg'}
    ]);
  }

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/artists/katelyn/one.jpg',
      '/images/artists/katelyn/two.jpg',
      '/images/artists/katelyn/three.jpg',
      '/images/artists/katelyn/four.jpg',
      '/images/artists/katelyn/five.jpg',
      '/images/artists/katelyn/six.jpg',
      '/images/artists/katelyn/seven.jpg',
      '/images/artists/katelyn/eight.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = false;
  ispostSubtitlePhoto: boolean = true;
  ispostImage: boolean = true;
  isimageCaption: boolean = false;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = false;
  isqa1: boolean = true;
  isqa2: boolean = true;
  isphotoDescription: boolean = false;
  issocial: boolean = true;

  postTitle = 'Katelyn Ledford';
  postSubtitlePhoto = "Photography by Mateo Montoya";
  postImage = "/images/headImages/katelyn.jpg";

  qa1 = [
    {
      q: "When these pieces were first forwarded to me, I thought I was looking at photographs. Needless to say, these pieces are stunning. How long have you been painting?",
      a: 'I first started painting with acrylics when I was 15 and tried my hand at photorealism with paints. It took me awhile to get more comfortable with oil paints in high school since they dry so slowly, but I was definitely hooked once I got the hang of it. However, I’m only where I am now with my level of painting because I taught myself how to draw photo-realistically at a young age. I would print out pictures of my favorite band members and draw them in graphite to mimic the images. My mom says she saw one of my drawings in my room and cried because she knew I had a talent for capturing people’s faces. They’re not very good looking at them now, but constantly practicing when I was young gave me an early start into my art career.'
    }
  ];
  qa2 = [
    {
      q: "Hyperrealism is evident in your work. Is that the movement you identify with most?",
      a: 'As of right now, yes I do. I’ve received backlash before for doing so because some see it as simply a copy of a photograph with no meaning behind it, but that’s Photorealism, not Hyperrealism. The whole point of Hyperrealism is to create these living, tangible subjects with felt emotions and a story, not just recreate a pretty picture. I’m beginning to add in more elements to my paintings to help tell a narrative, like leaving areas unfinished and drafted, but I still maintain a Hyperrealistic style in the most important parts of my paintings.'
    },
    {
      a: "Is most of your work this photo-real?",
      q: 'I’ve tried to stray from photo-real works in the past, but I always come back to it, so most of my work is photorealistic even from a young age. Trying out other styles usually felt foreign even though they did push me out of my comfort zone. I learned to be less uptight about painting from experimenting with expressive lines and abstracted forms, so I’m glad to have tried out other styles.'
    },
    {
      q: 'What is your favorite medium to work with?',
      a: 'Oil paints are my one true love, but honestly I can get addicted to any other medium, like embroidery, metal casting, or woodworking. I never thought I would be one to get into 3-D works, but after taking sculpture classes at UAB, I really enjoyed getting to understand my pieces from every angle, especially metal casting. Working with aluminum and iron is very process based and you don’t get to see your final product until the very end, which is completely different from oil painting, so it was refreshing to become familiar with it as I continued painting. Graphite is a close second for me as a favorite since it was my first medium to ever work with and I still love to do little graphite drawings when I have the free time. It’s easy to sit on my couch and draw up something that inspires me then immediately put it into one of the many antique frames I collect.'
    },
    {
      q: 'Do you have any shows coming up? Where can we see these on canvas?',
      a: 'I have my diptych piece, “This is Jake,” up at the Wiregrass Museum of Art in Dothan, AL from July 21st – September 24th and another piece, “Vincent,” showing at Lowe Mill in Huntsville, AL until September 10th. Hopefully I’ll have more exhibition opportunities coming up locally, but I’ll announce those on my Instagram when they do. For now, I have my work up on my website, "kledfordart.com, that I try to keep up to date as I complete paintings.'
    }
  ];

  socials = [
    {
      description: "kledfordart.com",
      url: "http://kledfordart.com/",
      img: "/images/icons/website.png"
    },
    {
      description: "kedford",
      url: "https://www.instagram.com/kedford/",
      img: "/images/icons/insta.png"
    }
  ];

  pageUrl: string = 'KatelynLedford';
  shareTitle: string = 'Katelyn%20Ledford';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artist, creatives";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


}
