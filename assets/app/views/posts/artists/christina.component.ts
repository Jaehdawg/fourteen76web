import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Christina implements OnInit {
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
      '/images/artists/christina/one.jpg',
      '/images/artists/christina/two.jpg',
      '/images/artists/christina/three.jpg',
      '/images/artists/christina/four.jpg',
      '/images/artists/christina/five.jpg',
      '/images/artists/christina/six.jpg',
      '/images/artists/christina/seven.jpg',
      '/images/artists/christina/eight.jpg',
      '/images/artists/christina/nine.jpg',
      '/images/artists/christina/ten.jpg'
    ]
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
  issocial: boolean = true;

  postTitle = 'Christina Daniel (Dagger Fingers)';
  postImage = "/images/headImages/christina.jpg";

  qa1 = [
    {
      q: 'So what inspired Dagger Fingers?',
      a: "I think Dagger Fingers as an illustration project spurred from a time in my life when I was experiencing a variety of frustrations that a lot of young people, especially creative makers go through, career wise, day job wise - whether that's trying to find the time to do what you love after you've done what pays the bills or struggling with taking the steps towards figuring out what it is you're most passionate about. I was constantly falling in and out of love with the juxtaposition between what makes something 'fine art' versus something considered low brow, and I'd say that combined with crippling anxiety in social situations but not having figured out a way to communicate that - all of that became this entity that I just started talking from. I was already doing graphic design and had focused on fiber arts and drawing in undergrad, but realized that the best way to deal with what I was going through was to laugh at it through pen and ink.",
      a2: "At first I was scribbling little pen drawings on Post It notes and scrap printer paper between projects at my first office job, but eventually it became so that I would hear a line during the day or have a conversation that would ignite this tongue in cheek response or phrase that I eventually paired with an illustration. Sometimes I'd illustrate the line, or jot it down in my sketchbook. I usually have a few at a time that I play around with until they feel right, and become a print."
    }
  ];
  qa2 = [
    {
      q: 'I see a lot of naturalism in your work. Does that come from a special interest in anything?',
      a: "I grew up with a lot of house plants and vibrant gardens - being raised around the outdoors and a love for gardening definitely rubbed off. Even now my place is pretty packed with plants. I'd like to do more work like the screen printed poster I did for Ruffner Mountain's first art show, Eco Stories. That show just ended this month, but I enjoyed the excuse to study some of Alabama's native plants. I really like what Jon Woolley at Ruffner is doing by bringing local visual artists together to illustrate ecological elements and information from their Nature Center."
    },
    {
      q: "Where do you hope to take Dagger Fingers?",
      a: "I'd like to focus more on making series and print editions, I think. DF started in November 2014 so going from sculpture and large scale drawing to this black line aesthetic still feels pretty new for me. For a while I was churning out tons of drawings but wasn't really sure how to curate what I posted or did with it, and now I've taken a step back and am more project by project and art show focused. I've submitted a few pieces to a couple of group zines that are coming out soon. I would like to get an online shop situation going, but I'm still trying to figure out my audience and overall goals. I definitely want to collaborate with other artists & illustrators more - the few times I've gotten to do that so far have been awesome."
    },
    {
      q: 'How many times have you watched the "God Warrior" clip?',
      a: "Haha, only a few times actually. My tshirt you're referring to came from the largest drawing I've done to date - which was mailed to the Fine Southern Gentlemen screen printing warehouse in Austin, Texas as a trade and they actually ended up printing them up as shirts too. They really loved the phrase 'dark sided' and let me add my own spin to it."
    }
  ];

  socials = [
    {
      description: "daggerfingers",
      url: "https://www.instagram.com/daggerfingers/",
      img: "/images/icons/insta.png"
    }
  ];

  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


}
