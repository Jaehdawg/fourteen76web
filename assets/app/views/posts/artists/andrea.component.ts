import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Andrea implements OnInit {
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
      {property: 'og:image', content: global.shareImgUrl + 'andrea.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Artist Interview`},
      {name: 'twitter:image', content: global.shareImgUrl + 'andrea.jpg'}
    ])
  }

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/artists/andrea/one.png',
      '/images/artists/andrea/two.png',
      '/images/artists/andrea/three.png',
      '/images/artists/andrea/four.png',
      '/images/artists/andrea/five.png',
      '/images/artists/andrea/six.png',
      '/images/artists/andrea/seven.png'
    ]
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);

  }

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = false;
  ispostSubtitlePhoto: boolean = false;
  ispostImage: boolean = true;
  isimageCaption: boolean = false;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = false;
  isqa1: boolean = true;
  isqa2: boolean = true;
  isphotoDescription: boolean = false;
  issocial: boolean = false;

  postTitle = 'Andrea Really';
  postImage = "/images/headImages/andrea.jpg";

  qa1 = [
    {
      q: 'Psychedelic themes are pretty apparent in your work; synesthesia, warped space, lush colors, etc. Do you find your art to be concerned primarily with the realms of psychedelia?',
      a: "It’s easy to gather that psychedelia has its influence on my work, and that’s all there is to it. I am not conceptually concerned with psychedelia, and lately I’ve been trying to keep my content further away from it. My bold and whimsical style is so inherent that it’s nearly impossible for me to stay from it. So, I push to keep my paintings in the realm of contemporary folk/pop-surrealism rather than being just psychedelic. I’m definitely not trying to make “trippy” art for festivals and mellow mushrooms, although my style seems to be well received in that context anyway (haha)."
    }
  ];
  qa2 = [
    {
      q: 'Your pieces seem to incorporate lots of intimate, sometimes tense, motion and touch. Have these themes always been present in your work?',
      a: "Yes, and I love it when people read that sort of sensation in my work. The term “visceral” gets thrown around a lot in the art world but it’s something I always keep in mind when selecting imagery. I use bodies, body parts, motion, tension, and gooey organic content in an attempt to somewhat push the viewers buttons and give them a deep, physical, gut reaction. My favorite art makes me subconsciously feel, twitch, move, tighten, giggle, gag, and breathe with the piece, and I want my work to give people that same experience before they even have time to delve into their intellectual reaction. I try to accomplish this in both my paintings and my videos. I get a lot of feedback about my work being either unsettlingly grotesque, sensually erotic, or euphorically playful, and I am very happy with any of these readings!"
    },
    {
      q: 'What would you consider your most formative years as an artist so far?',
      a: `I hope that I can always answer this question by saying the last few, because I want my growth as an artist to be exponential. I graduated with my BFA from the University of Montevallo less than a year ago, and my last two years at that school were definitely full of more artistic productivity and discovery than any other point in my life. I had so much time on my hands, was in such an open minded and creative environment, and was constantly being fed new ideas and new projects. A good art school is an absolutely fantastic experience and I’m pining to continue my education in graduate school. Thankfully my growth hasn’t stopped in my post grad life. There’s no one to challenge me with projects and ideas other than myself, and I’ve chosen to do just that. I’ve been spending a lot of time discovering different aspects of my style and abilities, experimenting with mediums, getting involved in the creative community, vending, booking shows, and studying the art world and its history on my own. Sure, I’m kind of doing it in manic fear of existential dread and purposelessness (hahaha), but it gives me peace of mind. It’s all I have now.`
    },
    {
      q: 'What era/artist has had the largest impact on your work?',
      a: `While most people would consider me a painter/illustrator first (it is, after all, the easiest way to feed people your work), I am completely obsessed with video and performance art. That’s the stuff that gives me a serious cerebral hard-on. From the hidden gems of Fluxus films and happenings recorded on Portapak, to the all-stars like Marina Abramovic, Joseph Beuys, Nam June-Paik, Bill Viola, etc - I absolutely love it all. As far as painting and illustration goes, I’ve lately enjoyed soaking up inspiration from the clean and colorful imagery of designers like Luke Pelletier, Mike Perry, Marcello Velho, Jack Sachs, and Clay Hickson. My current artist of great obsession, though, is Zio Ziegler. Seriously, go check his stuff out. He’s so young and so deep into his career, and he’s pumping out work like a machine. His paintings resonate with me so much that I feel physically angry for not making them myself. It’s too good.`
    },
    {
      q: 'Why art?',
      a: 'Why anything...?'
    }
  ];


  pageUrl: string = 'AmyVaughn';
  shareTitle: string = 'Amy%20Vaughn';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artist, coolart, creatives";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


}
