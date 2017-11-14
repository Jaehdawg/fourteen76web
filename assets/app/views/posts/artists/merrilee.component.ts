import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Merrilee implements OnInit {
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
      '/images/artists/merrilee/one.jpg',
      '/images/artists/merrilee/two.jpg',
      '/images/artists/merrilee/three.jpg',
      '/images/artists/merrilee/four.jpg',
      '/images/artists/merrilee/five.jpg'
    ]
  }

  ispostTitle: boolean = true;
  ispostImage: boolean = true;
  isimageCaption: boolean = false;
  ispostSubtitle: boolean = true;
  ispostSubtitlePhoto: boolean = true;
  isdescriptionHeading: boolean = true;
  ispreQIntro: boolean = true;
  isqa1: boolean = true;
  isqa2: boolean = true;
  isphotoDescription: boolean = false;
  issocial: boolean = true;


  postTitle = 'Merrilee Challiss';
  postSubtitle = "Interview by Jonathan Patrick";
  postSubtitlePhoto = "Photography by Mateo Montoya";
  postImage = "/images/headImages/merrilee.jpg";
  descriptionHeading = [
    "\"...le mieux est l'ennemi du bien.\"",
    "(...perfect is the enemy of good.)",
    "-Voltaire"
  ];
  preQIntro = [
    "Merrilee Challiss recently invited us into the waking dream that is her studio full of nooks cozy with the words and images of Haekel and Harper, succulent shrines, a work space more like an altar to ancient spirits captured on canvas, and a thousand sequined eyes whose pupils watch you watch yourself. She spoke with us about the necessity of acknowledging our environment in a way only our ancient ancestors knew how, how her work is a cry for community and empathy, and what I can only describe as (wo)mankind's need to return to some great mother. Below is a brief first part of what we spoke about.",
  ];
  qa1 = [
    {
      q: "Lots and lots of spiritual and totemic vibes are apparent here in your work.",
      a: "Yea, I'm definitely influenced by African art, Paleolithic art, indigenous art, and Also by people like Ernst Haeckel. Do you know who he is?"
    },
    {
      q: "No.",
      a: "He was a scientist and illustrator, a contemporary of Darwin. I'm influenced by him and also by Charlie Harper, an artist and illustrator. Their work excites the realms of wonder and imagination through this propagation of intelligence that we see in evidence in all forms in nature. That idea - that everything is connected - that it is ALL one thing- is a big part of my work, so I am connecting and engaging with the natural world and the spirit world through my art. I guess that's how I'm trying to insinuate my role as an artist in society."
    },
    {
      q: "That's interesting, because early indigenous peoples, immersed in the natural world, expressed that propagation so well in their art; art made from looking to the skies or praising their crop.",
      a: "Well, they were definitely in more of a natural rhythm with all of the systems on earth. There's an archaic revival happening now, there's a mass extinction happening now, and we are also in a technical and informational revolution- so what we're living through is such an insanely chaotic time. I think this return to something that is more primal and more archaic (more rooted in interdependence) is really our only hope forward, because we have to remember that we're all connected. All these ideas have been converging for me as a maker and an artist, which sounds kind of wacky, but the act of putting one sequin on, then another sequin on, and having a breath or a thought in between that, you know, the whole work as a process becomes a meditation, a way to slow time down. It's kind of like my strategy for surviving these challenging times (laughs)."
    },
    {
      q: "Yea. In the sequined work, and maybe even in your dense line work, the meditative aspects are pretty hypnotic. I get kind of lost in its repetition.",
      a: "Yea, I always try to find patterns in nature. The work is just patterns, really. And if you think about some of the most compelling contemporary theories of physics, they say that the whole universe is made of vibrations, or that the universe is conscious. I see these sequins as these dots of light, these individual points of data, pointing to whatever the great mystery is."
    }
  ];
  qa2 = [
    {
      q: "*Looking to a work in progress on one of Challiss' tables* This is Eostre? Or Ishtar?",
      a: "Actually I was thinking of Artemis [of Ephesus]. I turned twenty-one while traveling in Turkey and spent my birthday walking among the ruins and viewing the statues in the museum in Ephesus. That experience affected me profoundly. She’s been popping up in my work for decades."
    },
    {
      q: "What brought you to depict her and these other women?",
      a: "They represent goddess energy or Gaian energy. I feel like we all collectively need to inject our world, via whatever our individual sphere of influence is, with as much Gaian consciousness as possible. Cynicism, which we are swimming in, is just no longer an appropriate response to the many challenges we are facing. We are living through some crazy times there’s a lot of really heavy shit – and yet there is so much beauty. How do you not make art about this stuff?"
    },
    {
      q: "What you mentioned about the need to depart from cynicism is interesting. It seems that with the internet age and the rate of the exchange of information these days that all of a sudden everyone's a smart ass. Cynicism and sarcasm seem to have lost their edge and meaning in a lot of ways.",
      a: "I just don't think it’s particularly useful for solving problems."
    },
    {
      q: "Yea. It seems cynicism has done a lot of legwork as far as bringing us to certain realizations goes, but maybe in those areas where the battlefield has leveled out it's time to come together and start building upon those realizations.",
      a: "I feel like we have to give up the notion of \"battlefield\", we have to give up the notion of dichotomy and otherness and separateness and nationhood. We are all one family, we are all one people. The separateness is an illusion."
    },
    {
      q: "Definitely. **Looking at \"Do the Wetiko!\"** Those indigenous vibes we talked about earlier are heavy in this piece. Would you elaborate?",
      a: "Well, there's a lot of darkness in my work. Maybe you can see that, that I'm trying to balance the light and the dark in a way. This piece here is about the idea of Wetiko, a word I had never heard of before until last fall, and after the election it popped up and kept popping up again and again in my own little liberal-bubble echo-chamber of a feed, so I thought to investigate it a little further. It's a Native American term describing the psycho-spiritual disease of the West; that people who haven't faced their own shadow, or darkness, are the ones who are fucking shit up the worst right now, you know? (laughs). It's spreading like a virus, and cutting us off from interconnection. So we have to dissolve this otherness, the main message of the divine feminine. Otherwise we're all going to end up in World War III."
    }
  ];

  socials = [
    {
      description: "merilka",
      url: "https://www.instagram.com/merilka/",
      img: "/images/icons/insta.png"
    }
  ];

  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


}
