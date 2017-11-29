import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Leah implements OnInit {
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
      {name: 'description', content: `Artist Showcase`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Artist Showcase`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'leah.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Artist Showcase`},
      {name: 'twitter:image', content: global.shareImgUrl + 'leah.jpg'}
    ])
  }

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/artists/leah/one.jpg',
      '/images/artists/leah/two.jpg',
      '/images/artists/leah/three.jpg',
      '/images/artists/leah/four.jpg',
      '/images/artists/leah/five.jpg',
      '/images/artists/leah/six.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = false;
  ispostSubtitlePhoto: boolean = false;
  ispostImage: boolean = false;
  isimageCaption: boolean = false;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = false;
  isqa1: boolean = true;
  isqa2: boolean = true;
  isphotoDescription: boolean = false;
  issocial: boolean = true;

  postTitle = 'Leah Thornton';

  qa1 = [
    {
      q: "Pieces like It Hasn't Come Yet and John Doyle are simultaneously sparse and full of energy. The way texture is used lends a lot of that life. How would you rank texture v. color v. form in your work?",
      a: 'Color definitely takes precedence to texture and form. Usually I am drawn to colors/ a color palate and work from there. The texture and overall composition come about in a more organic fashion.'
    }
  ];
  qa2 = [
    {
      q: "Bright, pastel colors, skewed geometry, open space, deep textures, a mixture of tranquility and commotion, all pose a contrast that isn't necessarily violent, even innocent, in how naturally it falls into place. There seems to be no motive or bias in this series. Would you consider some of these pieces a sort of painted prose?",
      a: '‘Painted prose’ is an excellent way of describing these paintings. The way they fall into place is similar to a conversation- unexpectedly poetic at times, but more often than not- marks that have to be erased and painted over. But all marks become a part of the work/ story.'
    }
  ];

  social = [
    {
      description: "laylaspecial.tumblr",
      url: "http://laylaspecial.tumblr.com/",
      img: "/images/icons/website.png"
    },
    {
      description: "adult_braces",
      url: "https://www.instagram.com/adult_braces/?hl=en",
      img: "/images/icons/insta.png"
    }
  ]


  pageUrl: string = 'AmyVaughn';
  shareTitle: string = 'Amy%20Vaughn';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artist, coolart, creatives";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


}
