import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Rizzo implements OnInit {
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
      '/images/artists/rizzo/one.jpg',
      '/images/artists/rizzo/two.jpg',
      '/images/artists/rizzo/three.jpg',
      '/images/artists/rizzo/four.jpg',
      '/images/artists/rizzo/five.jpg',
      '/images/artists/rizzo/six.jpg',
      '/images/artists/rizzo/seven.jpg',
      '/images/artists/rizzo/eight.jpg'
    ]
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

  postTitle = 'Rizzo';
  postSubtitlePhoto = "Photography by Mateo Montoya";
  postImage = "/images/headImages/rizzo.jpg";

  qa1 = [
    {
      q: 'I see a heavy influence of Japanese spirituality, (Shinto and Buddhism I believe)? How did that come about?',
      a: "You're absolutely right. Over the past few years I've taken a very heavy influence from Buddhist ideologies, and eastern philosophy in general. There are a few classes I've taken in my studies that have really helped me identify the ideas that I wish to process, create, and generate work from. I think my interest in unveiling a sense of peace in my every-day started at an early age, though it didn't start to take visual form in my work until pretty recently. Drawing ideas, both literally and figuratively, from Buddhist and eastern ideologies has been a huge part of my process for the past few years."
    }
  ];
  qa2 = [
    {
      q: 'You seem to meld that influence with a love of old school graffiti and tagging culture? Can you tell us more about that?',
      a: "Sure. When it comes down to it, I am putting the things I truly enjoy into one. I have always enjoyed the way graffiti exists on it's own accord. There's really nothing like it. The style, way it looks, where it's at, how, why and when it got there, and who did it all became very interesting to me at a younger age. I have always looked up to those behind the scenes... Artists that are making incredible work yet living in the shadows, their identities shrouded in mystery. The acceptance that they face knowing the work they've created may not live on. That sense of detachment is humbling in a way. This influence from graffiti definitely stems from a love for drawing typography as well. So, it's had an immense impact on me and what I generate."
    },
    {
      q: "We're picking up a little weary agnosticism? This feeling of quelling the spirit in the face of potential greater powers? A sense of acceptance with powerlessness?",
      a: "I'm glad you see that. Spirituality, and the perspective it provides me, are huge forces that keep me going. Although I am not at all specifically religious, the perspective I have gained is a major part of me as a person and has aided in far more than just my artistic endeavors. Learning to fully detach is a major concept in meditation, and acceptance with powerlessness is a part of that. Meditation plays a huge part in making my work. The idea of quelling the spirit comes from these concepts of meditation and detachment as well. Letting go, consciously breathing and enjoying, even in the face of potential greater powers, good or bad, is a part of this bizarre thing we call life."
    },
    {
      q: 'Keith Haring or Banksy?',
      a: 'Haring, without a doubt.'
    },
    {
      q: 'Pop-locking or breakdancing?',
      a: 'Might go with breakdancing, but let loose and dance how ya feel is what I\'m saying!'
    }
  ];

  socials = [
    {
      description: "r.izzo",
      url: "https://www.instagram.com/r.izzo/",
      img: "/images/icons/insta.png"
    }
  ];

  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


}
