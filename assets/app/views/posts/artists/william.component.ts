import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class William implements OnInit {
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
      {property: 'og:image', content: global.shareImgUrl + 'william.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Artist Interview`},
      {name: 'twitter:image', content: global.shareImgUrl + 'william.jpg'}
    ])
  }

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/artists/william/one.jpg',
      '/images/artists/william/two.jpg',
      '/images/artists/william/three.jpg',
      '/images/artists/william/four.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  ispostTitle: boolean = true;
  ispostImage: boolean = true;
  isimageCaption: boolean = false;
  ispostSubtitle: boolean = true;
  ispostSubtitlePhoto: boolean = true;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = false;
  isqa1: boolean = true;
  isqa2: boolean = true;
  isphotoDescription: boolean = false;
  issocial: boolean = true;

  postTitle = 'William Webb';
  postSubtitle = "Interview by Jonathan Patrick";
  postSubtitlePhoto = "Photography by Mateo Montoya";
  postImage = "/images/headImages/william.jpg";

  qa1 = [
    {
      q: "Your choice to include the canvas and borders in some of this series exposes your process. Was this choice, to quote Bob Ross, a \"happy accident\", premeditated, or a little of both?",
      a: "I would say my choice to include the borders in some of the pieces was a little of both. Most of my work is very process oriented. I had been making paintings from roll canvas with the intention to stretch the paintings, eventually. After I finished a few works from an on going series I have named, Urban Gestures, I realized that the border and frayed edges where as much of the final piece as the painting itself. I feel it further emphasizes the process of painting, which is very important to me."
    }
  ];
  qa2 = [
    {
      q: "Willem de Kooning or Mark Rothko?",
      a: "Both have been very influential in my work, as well as many other members of the Abstract Expressionist. I would have to say my largest influence has been the work of Bill de Kooning. His color pallet, brushstroke, and layered process is very evident in my work. Like most of the ABEX, Bill questioned academic painting and the standards that had been set for painters. He focused on the act of painting not the final \"beautiful\" image, that had been desired by his predecessors, which are just a few things that attracted me to de Kooning's work."
    },
    {
      q: "Urban environments and cityscapes seem to be the central theme to this series. As a skater, would you say skate spots and graffiti you've scoped out have seeped into your work?",
      a: "As skater you develop a complex understanding of space. I always say we look at the world through a skateboarding perspective, which means we are constantly scanning our surroundings for anything and everything that could be skated. A little bump in the sidewalk, a ledge on the side of a building, a rail against the wall in an alley, a grate to fire hydrant, anything. We actively put ourselves into the urban environment and typically into the less desirable areas, which tends to be where graffiti thrives. I would say the skateboarding perspective and lifestyle is an enviable influence in my work.",
      a2: "In this series, I wanted to use that spacial understanding I've developed as a skateboarder to create my own urban environments while using active marks that have been directly influenced by graffiti."
    }
  ];

  socials = [
    {
      description: "williamwebb_",
      url: "https://www.instagram.com/williamwebb_/",
      img: "/images/icons/insta.png"
    }
  ];

  pageUrl: string = 'WilliamWebb';
  shareTitle: string = 'William%20Webb';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artist, creatives";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


}
