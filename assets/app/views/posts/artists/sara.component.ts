import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';
@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Sara implements OnInit {
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
      {property: 'og:image', content: global.shareImgUrl + 'amy.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Artist Interview`},
      {name: 'twitter:image', content: global.shareImgUrl + 'amy.jpg'}
    ])
  }

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/artists/sara/one.jpg',
      '/images/artists/sara/two.jpg',
      '/images/artists/sara/three.jpg',
      '/images/artists/sara/four.jpg',
      '/images/artists/sara/five.jpg',
      '/images/artists/sara/six.jpg',
      '/images/artists/sara/seven.jpg',
      '/images/artists/sara/eight.jpg'
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

  postTitle = 'Sarah C. Rehmert (Tea Princess)';
  postSubtitle = "Interview by Ahamad Jackson";
  postSubtitlePhoto = "Photography by Mateo Montoya";
  postImage = "/images/headImages/sara.jpg";

  qa1 = [
    {
      q: "So what brought about the tea princess?",
      a: "To put it simply, I love tea. I always drink it when I make art or have to focus on a task because it helps my productivity. Honestly, I hadn't thought about this until you asked about it, but tea is often what inspires me to draw tiny, vibrant, flowers. Really, the handle tea princess has a sweet, feminine, ring to it."
    }
  ];
  qa2 = [
    {
      q: "There's definitely a feminist theme of sisterly bonding and sisterly suffering. A reclamation of power. A feminine access to the divine. Can you tell me more about that? Especially using some childhood-associated images?",
      a: "I'm the older sister, so when I was growing up I always felt that it was up to me to be strong, especially for my little sister. I think some of my female-oriented art reflects the regret I have for not being closer to her when I could have been. My family moved away right when I started college, and not a day goes by that don't wish I had held her a little tighter when I had the chance. A lot of my art is very sorrow-themed, and I really can't imagine a greater sorrow than feeling something you love dearly slip away. In several of my other pieces I try to make up for that sadness by illustrating these \"wild\" devil-women. They're powerful succubi who are overcoming that sadness and reaching a higher potential."
    },
    {
      q: "Final question? What's your favorite Crystal Gem?",
      a: "Definitely Lapis Lazuli! I love how the creators of the show made up for her suffering and sad backstory by giving her fearsome powers. She's a force to be reckoned with, for sure."
    }
  ];

  socials = [
    {
      description: "_teaprincess",
      url: "https://www.instagram.com/_teaprincess/",
      img: "/images/icons/insta.png"
    }
  ];

  pageUrl: string = "SarahRehmert";
  shareTitle: string = 'Sarah%20Rehmert';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artist, creatives";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


}
