import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

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

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/artists/leah/one.jpg',
      '/images/artists/leah/two.jpg',
      '/images/artists/leah/three.jpg',
      '/images/artists/leah/four.jpg',
      '/images/artists/leah/five.jpg',
      '/images/artists/leah/six.jpg'
    ]
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


  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


}
