import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Hannah implements OnInit {
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
      '/images/artists/hannah/one.jpg',
      '/images/artists/hannah/two.jpg',
      '/images/artists/hannah/three.jpg',
      '/images/artists/hannah/four.jpg',
      '/images/artists/hannah/five.jpg',
      '/images/artists/hannah/six.jpg',
      '/images/artists/hannah/seven.jpg',
      '/images/artists/hannah/eight.jpg'
    ]
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

  postTitle = 'Hannah Barrett';
  postImage = "/images/headImages/hannah.jpg";

  qa1 = [
    {
      q: 'What art do you most identify with?',
      a: 'I would have to say photography, painting and mixed media/collage type stuff as well. I really enjoy seeing elements of this photographic world intertwine with surreal abstractions of the mind, challenging one’s sense of reality.'
    },
    {
      q: 'You take detailed landscapes and human form and abstract them, and in the case of "FACES", both at the same time, unraveling then lacing the two back together. Is this a binding theme or just coincidence?',
      a: 'It’s probably a subconscious theme. When I started school I had a strong interest in photography. Then I began painting which lead me to use a lot of my photography as subject matter. Towards then end of school I began to experiment with combing the realistic elements of photography with surreal abstractions and shapes formed with paint or other mediums. Now that I’m out of school and do not have assigned projects I tend to work without knowing what I’m creating, so I usually find myself intertwining these two elements,'
    }
  ];
  qa2 = [
    {
      q: 'Nature is in no need of man. Is man in need of nature?',
      a: 'Definitely. It is medicine for the soul. With all the smart phones and smart things constantly telling us everything its so easy to forget how to just be. The best way to remember is to immerse yourself into nature and leave the smart stuff behind.'
    },
    {
      q: "Favorite or most inspirational place?",
      a: "My grandparents' cabin on Lake Martin. It’s on this perfect peninsula surrounded by water with the sun rising and setting on either side. So many memories made there, from learning how to swim to throwing some crazy parties. It's a place that will always bring an overwhelming feeling of comfort"
    },
    {
      q: 'What super power would you have and why?',
      a: 'Being able to fly. First of all i love being off the ground, whether it be climbing up a 70ft rock face, or hanging from a trapeze so being able to fly would be right up my ally. Secondly, i could just dip out of any situation. BYE'
    }
  ];


  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


}
