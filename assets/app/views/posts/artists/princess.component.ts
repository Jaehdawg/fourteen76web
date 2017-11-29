import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component({
  selector: 'app-artist',
  templateUrl: './princess.component.html'
})

export class Princess implements OnInit {
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
      {name: 'description', content: `The girls are putting on their faces in the bathroom while I’m crouching on the wooden floor and the afternoon sun starts raising floodlights on the space I used to call my bedroom. I causally chew on the wooden tip of my hand fan and check the time. We’re running behind, but it was to be expected: The girls are new to Alabama­­, let alone Birmingham­­, so finding their materials would have understandably taken a good chunk of time.`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `The girls are putting on their faces in the bathroom while I’m crouching on the wooden floor and the afternoon sun starts raising floodlights on the space I used to call my bedroom. I causally chew on the wooden tip of my hand fan and check the time. We’re running behind, but it was to be expected: The girls are new to Alabama­­, let alone Birmingham­­, so finding their materials would have understandably taken a good chunk of time.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'princess.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `The girls are putting on their faces in the bathroom while I’m crouching on the wooden floor and the afternoon sun starts raising floodlights on the space I used to call my bedroom. I causally chew on the wooden tip of my hand fan and check the time. We’re running behind, but it was to be expected: The girls are new to Alabama­­, let alone Birmingham­­, so finding their materials would have understandably taken a good chunk of time.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'princess.jpg'}
    ])
  }

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/princess/one.jpg',
      '/images/photography/princess/two.jpg',
      '/images/photography/princess/four.jpg',
      '/images/photography/princess/five.jpg',
      '/images/photography/princess/six.jpg',
      '/images/photography/princess/seven.jpg',
      '/images/photography/princess/eight.jpg',
      '/images/photography/princess/nine.jpg',
      '/images/photography/princess/ten.jpg',
      '/images/photography/princess/eleven.jpg',
      '/images/photography/princess/twelve.jpg',
      '/images/photography/princess/thirteen.jpg',
      '/images/photography/princess/fourteen.jpg',
      '/images/photography/princess/fifteen.jpg',
      '/images/photography/princess/sixteen.jpg',
      '/images/photography/princess/seventeen.jpg',
      '/images/photography/princess/eighteen.jpg'
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
  ispreQIntro: boolean = true;
  isqa1: boolean = true;
  isqa2: boolean = false;
  isphotoDescription: boolean = false;
  issocial: boolean = false;

  postTitle = 'PRINCE$$ 4 PRINCE$$';
  postImage = "/images/headImages/princess.jpg";
  imageCaption = "Teeny Montana and Pussybaby";
  postSubtitle = "Interview by Ahmad Jackson";
  postSubtitlePhoto= "Photography by Mateo Montoya";
  preQIntro = [
    `The girls are putting on their faces in the bathroom while I’m crouching on the wooden floor and the afternoon sun starts raising floodlights on the space I used to call my bedroom. I causally chew on the wooden tip of my hand fan and check the time. We’re running behind, but it was to be expected: The girls are new to Alabama­­, let alone Birmingham­­, so finding their materials would have understandably taken a good chunk of time. This entire encounter is serendipitous, so there’s no point in harping on time. I spit out my fan and survey the room. The sight is aggressive yet soft as moonlight. The demanding Mattel pinks, sugaries blues, and checker patterns disorient the masculine memories of my own unfortunate childhood. Stuffed bodysuits are draped about in states of disjointed animation­­, sexless monsters of liminal joy that promise reclamation of identity with a cost of erasure from the human recognition and empathy. From atop the tea party set, an Optimus Prime mask slurs bassy complaints behind glittery pink duct tape. The assault calls to mind the work of Antonin Artaud, who demanded "communion between actor and audience in a magic exorcism; gestures, sounds, unusual scenery, and lighting combine to form a language, superior to words, that can be used to subvert thought and logic and to shock the spectator into seeing the baseness of his world." In this case, Teeny Montana and Pussybaby would be likened more to priestesses than actors, for the installation work carries more spiritual importance than a simple actor with a character performance. These two trans artists are bringing us into their own world, one where the princesses are always at play.`
  ];
  qa1 = [
    {
      q: 'How long have you been on the road?',
      a: `Getting close to four years now.`
    },
    {
      q: `Where is home?`,
      a: `I started out from Omaha, Nebraska.`
    },
    {
      q: `What inspired you to go on the road?`,
      a: `Before I went on the road I was a year unemployed, living at my mom’s house, and I didn’t want to get a job. I didn’t want to compete with society’s means. It was kind of hard to make money and I didn’t really care much for it. I was in a depressed state. Didn’t know where life was going so I just hit the road. I didn’t know about the traveler’s life, had no idea what I was doing, or where I was going. The second day I run into these freight hoppers, and that’s where my journey began. They showed me the ropes and taught me how to survive on the road.`
    },
    {
      q: `Are you glad about being on the road?`,
      a: `Yeah, I love the road; it has its ups and downs. In my experience there are more ups than downs. You have to stay positive about things, more so when they are shitty. That goes for everything, not just life on the road, but life itself. Always look on the positive side. Darkness can be good too; it’s a great teacher.`
    },
    {
      q: `How old are you?`,
      a: `23`,
      a2: `How about you guys, how old are you?`,
      a3: `We are both 19`,
      a4: `Damn, I thought you guys were older than me. When I was 19 I was going to college and doing a bunch of bad drugs. I went to a community college (Metropolitan Community College) in Omaha. I dropped out because I was just then figuring out how society was, getting into conspiracy theories and all that. I was also on Robitussin and pills at the time, so it was really fucking with my mind. I don’t really regret anything, although I am not so proud of the drugs.`
    },
    {
      q: `Do you still do drugs?`,
      a: `I do psychedelics and weed, that’s it. I don’t touch anything artificial anymore.`
    },
    {
      q: `Do you see yourself having an ending to your journey?`,
      a: `Yeah, at some point, I’m just going with it for now.`
    },
    {
      q: `What is the longest you have stayed at one place?`,
      a: `Six months. It was in Williams, Oregon. I was trimming on a pot farm.`
    },
    {
      q: `Did they pay you?`,
      a: `$200 a pound`
    },
    {
      q: `How far up north have you gone?`,
      a: `Washington`
    },
    {
      q: `What do you do for fun in these cities?`,
      a: `Well, hanging out in the popular spots and just running into people man, have good conversations and even hang; busking is easier in these spots too. I like to talk to people, get to know them, find out who they are and where they come from.`
    },
    {
      q: `How do you usually travel`,
      a: `Hitching, it’s how I get around most places. I used to hop freight trains. I also do a lot of walking.`
    },
    {
      q: `What’s the most you’ve had to walk?`,
      a: `42 miles, eventually someone picked me up; it usually doesn’t take long before someone does.`
    },
    {
      q: `How did you find Quasar?`,
      a: `I found him on the road two years ago. He is from Austin, Texas. This girl picked him off Craiglist, but she wasn’t able to take care of him. We’ve been together for two years now. He was kind of confused on who was his owner at first, because there used to be large group of kids around him all the time.`,
      a2: `He [Quasar] knows when people are tripping. He comes up and tries to lick the sweat, trying to get high. One time I was tripping in Austin, it was a hot night and I was cuddling him and sweating all over him, he started tripping and twitching. We both went into a dream like state. It felt like we were dreaming together, it was weird man. I saw forest spirits, I thought I was getting abducted by aliens, and at one point I felt like I was in a comma. Research chemicals are intense.`
    },
    {
      q: `What breed is Quasar?`,
      a: `Blue heeler German Shepherd, he is two and half years old.`
    },
    {
      q: `Do you usually travel by yourself or in groups?`,
      a: `I just started traveling by myself—about three months ago. It’s different; people seem a little more scared of me. Before no one ever asked me when they stopped to give me a ride if I was going to hurt them, now they do.`
    },
    {
      q: `Is it hard to find a place to sleep?`,
      a: `Not so much. I wake up pretty early, before businesses open, so sometimes I just sleep behind stores or in parking decks.`
    },
    {
      q: `Aside from life on the road, what are your other passions?`,
      a: `Music and art. Those are part of my main passions. Anyone can benefit from them, they just gives off a special feeling, and they heal. I also love to get my hands dirty and give back to the earth.`
    },
    {
      q: `Do you keep up with your mom?`,
      a: `I call her every now and then. I also visit her when I go through Nebraska`
    },
    {
      q: `How does she feel about your lifestyle?`,
      a: `Emotionally, she is alright now. She used to be real bad about it, you know, angry. She doesn’t get why I’m doing this, and that’s alright, we all have our own perspectives.`
    },
    {
      q: `What’s your dream?`,
      a: `I want to learn to sail, get a boat, and just travel the world.`
    },
    {
      q: `Where are you going next?`,
      a: `I don’t know. I might head north. I have a friend in Maryland that I want to visit.`
    }
  ];

  pageUrl: string = 'Princess4Princess';
  shareTitle: string = 'Princess%204%20Princess';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistshowcase, artists, creatives";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


}
