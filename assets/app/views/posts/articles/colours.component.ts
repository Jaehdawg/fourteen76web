import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component ({
  selector: 'app-colour',
  templateUrl: './templates/article.component.html'

})
export class Colour implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Living Colour was part of a huge wave of guitar and bass-driven funk that emerged in the late ‘80s, and are responsible for recording one of those songs that transcends generations. “Cult of Personality,” which appeared on their 1988 debut Vivid, was the type of song bigger than most any band; it has appeared in television shows, movies, video games, sports arenas—most any place that can use a soundtrack—for nearly 30 years.`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content:  `Living Colour was part of a huge wave of guitar and bass-driven funk that emerged in the late ‘80s, and are responsible for recording one of those songs that transcends generations. “Cult of Personality,” which appeared on their 1988 debut Vivid, was the type of song bigger than most any band; it has appeared in television shows, movies, video games, sports arenas—most any place that can use a soundtrack—for nearly 30 years.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'livingcolours.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Living Colour was part of a huge wave of guitar and bass-driven funk that emerged in the late ‘80s, and are responsible for recording one of those songs that transcends generations. “Cult of Personality,” which appeared on their 1988 debut Vivid, was the type of song bigger than most any band; it has appeared in television shows, movies, video games, sports arenas—most any place that can use a soundtrack—for nearly 30 years.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'livingcolours.jpg'}
    ])
  }

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = true;
  ispostSubtitlePhoto: boolean = false;
  ispostImage: boolean = true;
  ispostImageTwo: boolean = false;
  isimageCaption: boolean = false;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = true;
  isqa1: boolean = true;
  isqa2: boolean = false;
  isphotoDescription: boolean = false;
  issocial: boolean = false;

  postTitle = 'Corey Glover from Living Colour';
  postImage = "/images/headImages/livingcolour.jpg";
  postSubtitle = "Interview by Blake Ells";

  preQIntro = [
    'Living Colour was part of a huge wave of guitar and bass-driven funk that emerged in the late ‘80s, and are responsible for recording one of those songs that transcends generations. “Cult of Personality,” which appeared on their 1988 debut Vivid, was the type of song bigger than most any band; it has appeared in television shows, movies, video games, sports arenas—most any place that can use a soundtrack—for nearly 30 years.',
    'In 1984 Corey Glover teamed up with Vernon Reid in New York City to found the band. Glover was already busy, and he remains involved in a myriad of projects beyond his band. In 1986 he starred in the Oliver Stone film Platoon, before the band’s rise. He’s also enjoyed his own solo career, time fronting the New Orleans-tinged sounds of Galactic, as well as a theatre career.',
    'He recently talked more about joining the band, balancing some of his other work, and that inescapable hit the band recorded 30 years ago.'
  ]

  qa1 = [
    {
      q: `How did Vernon [Reid, guitarist] first get you to turn your attention to singing from acting?`,
      a: `He called [laughs].`,
      a2: `I never saw any reason that I couldn’t do both.`
    },
    {
        q: `Were you singing with another project when he recruited you to the band?`,
        a: `No, but I had been singing since I was 6-years-old. I was singing before I was acting. I was a working actor before I got into a band; it was just a matter of giving me a call.`
    },
    {
      q: `Do you and Vernon write songs together or do you write on your own and bring what you have to each other?`,
      a: `It depends on the song. Some songs we collectively collaborate back and forth; a song like “Glass Teeth”—we sort of sat down and wrote that. On other songs, Vernon will have an idea and I’ll elaborate on it or vice versa.`
    },
    {
      q: `You’ve recorded several solo records—what distinguishes something you’ve written as a solo song from a Living Colour song?`,
      a: `I don’t see Living Colour doing a song like “Little Girl.” It’s very particular in how it’s done. People always ask me after shows, “Why don’t you do ‘April Rain?’” Because the band doesn’t know it; it’s not their song. It’s not as personal to them. There’s something to be said for their separation.`,
      a2: `There’s some songs that they do that aren’t particularly for me; not just because they’re instrumental. When we come together, we have a different perspective and new ideas.`
    },
    {
      q: `How did you connect with Galactic?`,
      a: `The band had decided to take a break, and they were playing in New York at the Brooklyn Bowl and asked me to come sit in. I said, “Sure,” and it just worked out. The songs sounded really good. We were all like, “Hey, this sounds really nice.” Their crew, everyone involved was like, “Hey, that’s a really good fit.” So it went on from there.`
    },
    {
      q: `Is that a relationship that continues? Do you think you’ll perform with them again?`,
      a: `I did something earlier this year with them. And every now and then if they ask, I go. It gives me a lot of stuff to work with.`
    },
    {
      q: `The new [Living Colour] record is a little more bluesy. Do you think that Galactic had any influence on that?`,
      a: `Sort of. It’s interesting; the impetus for making this record was when we did a tribute to Robert Johnson at the Apollo in Harlem. We didn’t have a chance to rehearse for it; matter of fact, I was just flying in from doing some gigs with Galactic. So yes, there’s a little bit of influence in that I had just come off of a tour with Galactic and flew into New York to do this show.`
    },
    {
      q: `How did the Who Shot Ya EP come together and how did you select that all-star lineup [Black Thought, Chuck D, Prodigal Sunn]?`,
      a: `That EP was the brainchild of Andre Betts as sort of a primer for people to hear where we were at. It had been a long time since anyone had heard what we were doing, and we were still putting the finishing touches on the album. “Let’s expound upon that”—particularly because of what was going on and what continues to go on with guns in this world. It just seemed like a statement needed to be made of some kind.`,
      a2: `I’m a Biggie fan, and that one particular song—I thought was completely brilliant and every now and then, I’d just break into it. It was the most foreshadowing of his life because we still don’t know who killed Biggie Smalls.`
    },
    {
      q: `Is “Cult of Personality” as misunderstood and misused as “Born in the U.S.A.?”`,
      a: `It’s funny…I don’t know that there is any kind of interpretation that would be wrong. The entire idea of the song is that there are people who encapsulate whatever movement they feel that they’re trying to champion—the whole idea of Karl Marx as a cult of personality, which is what it’s about. The whole idea of what Marxism is, it’s based on his writing; not on his life per se.`,
      a2: `There’s a line in The Man Who Shot Liberty Valance—“When the legend becomes fact, print the legend.” And this is the same idea; if you take any hero’s story—any hero’s journey—or heroine’s story—and you make them the face of a particular thing, everybody uses it for their own purposes; doing exactly what we’re talking about.`
    }

  ]

  pageUrl: string = 'LivingColour';
  shareTitle: string = 'Living%20Colour';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "artistinterview, muscian, livingcoulour, music";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }
}
