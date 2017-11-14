import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Chris implements OnInit {
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
      '/images/artists/chris/one.jpg',
      '/images/artists/chris/two.jpg',
      '/images/artists/chris/three.jpg',
      '/images/artists/chris/four.jpg',
      '/images/artists/chris/five.jpg',
      '/images/artists/chris/six.jpg',
      '/images/artists/chris/seven.jpg',
      '/images/artists/chris/eight.jpg',
      '/images/artists/chris/nine.jpg',
      '/images/artists/chris/ten.jpg',
      '/images/artists/chris/eleven.jpg'
    ]
  }

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = true;
  ispostSubtitlePhoto: boolean = true;
  ispostImage: boolean = true;
  isimageCaption: boolean = false;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = false;
  isqa1: boolean = true;
  isqa2: boolean = true;
  isphotoDescription: boolean = false;
  issocial: boolean = true;

  postTitle = 'C.D. Sacco';
  postSubtitle = "Interview by Jonathan Patrick";
  postSubtitlePhoto = "Photography by Devin Lunsford";
  postImage = "/images/headImages/chris.jpg";

  qa1 = [
    {
      q: "From Cubism to Expressionism to Surrealism, these works seem to draw from a variety of movements, often adopting many styles in one piece. The inspirations blend well, never feeling heterogeneous. How long have you been honing in your mélange of styles?",
      a: "My formal endeavors into the arts began as a preteen when I began studying at the Alabama School of Fine Arts. My efforts were enamored with hyper-realism as a youth and I was determined to paint and draw that of the natural world--exactly as it lay. Upon sight of a slide of Francis Bacon’s “Painting 1946” when I was 15 years old truly enacted a turning point in my understanding of what art could be. I became obsessed with art from 1775-contemporary; however, I sat in on an introduction to Art History Course before my scheduled year to further my understanding of my zest for illusions. I discovered the greats of the Canon of Fine Art and I divulged into their stories as if they were great novels and found a kindred likeness in their feelings of displacement.",
      a2: "In any regard, my fervor for the recreation of the natural world turned to desire creating an abstraction of the natural world that felt or looked true. Through such a desire my world and work grew intensely. Its intensity became undeniable; so, I chose to escape through a world of dreams--which, I felt embodied everything at once (from the absurdity to the beauty)."
    }
  ];
  qa2 = [
    {
      q: "A few of these pieces are like fabricated collages, splicing scenes of street lights and telephone poles, human form and abstractions. Heavy texture in what seems to be paper mache, sometimes heavy paint, lend to this collage effect. Collage brings about the idea of mixture yet again, and while uniting the pieces, they seem to be united under a theme of hectic thought. Does this say anything about the process for these pieces?",
      a: "The series is a meditation on Surrealism or dreams. Dreams are illusive. I find that my clearest dreams are juxtaposed with nostalgic car rides, falling from cliffs & flying over treetops; however, just before I wake most mornings I find that my dreams flash before my mind’s eye and create a collage of moments and movement. That is precisely what inspired the seeming collage aspect in my paintings."
    },
    {
      q: "The pieces I Find the Morning Ceiling, Don't Worry About the Snow, and I Find My Portrait in Plains share color pallets and structures that bring to mind a sort of tangential Cubism, I Find the Morning Ceiling being the most abstracted and minimal of the three. What moved you to minimalize an often maximalist style?",
      a: '“I Find the Morning Ceiling” exists as a breaking from the illusion of the dream. Of the 24 pieces it is the only one that is meant to depict the natural world or the waking moment. The painting was once a complex yielding of a figure in a bleak, blasted landscape marked by flags and annotated by poetry--which looked pretty daunting, I thought. I also presumed that it would only further the story rather than close it. Without adieu I revised the scene to make the dream feel as though it were dissipating into the morning ceiling or that traces of the surreal were being projected onto the waking state'
    },
    {
      q: "On Elevation and In Flight seem to me both colorful and melancholy, hopeful and daunting. Can you give any insight on the process behind those two pieces?",
      a: 'The pull of love and heartbreak drove the process of both of those paintings. On Elevation came at the end of an engagement for marriage. My world was crushed--I felt I had lost everything, but remembered that once at the bottom of the wreck the only way out was up the ladder. This began a “slight”, temporary obsession or theme (which all themes should come from obsessions) with flight. Nostalgia had been a running theme in my work throughout my adolescence (which is funny considering I didn’t have too fun of a childhood--though I love most of my family still); so, I thought it only natural to portray paper airplanes since I also was obsessed with the tripartite dialogue of art (that which is the artist, the piece & the viewer all have their own “say” or voice).',
      a2: 'In Flight came after during a period where I wasn’t sure how to fall in love again. My thoughts were lost in the most potent dreams of my youth--the ones where I would fly above it all. I yearned to fly and to be in love, but felt distance from the people who tried to win my heart, ultimately leaving me to feel as though I had nothing to enhance their lives. I tried to date and did, which is what the dialogue comes from in the painting. I still have regrets that my confidence was so shaken for those years & I suppose I was painting my dreams to cope with that fact or maybe it was an attempt to escape them, though making art is more useful for self-actualization rather than escape for me & probably most that attempt to portray “truths”.'
    },
    {
      q: "You also have experience with film and video editing. You have just finished a film. Can you fill us in on what it is about and when to look for it?",
      a: '“Shifting, Drifting or (Falling into it Again)” is a Surrealistic Musical that is involved with this series. I keep changing it, though. Where it existed as a 30 minute piece I now see it should be longer and have been working on extending it. Hopefully I can finish it soon and enter it into film festivals throughout the country for 2017. After all, it is the end of my “hiatus”.',
      a2: 'It is also meant to be a meditation on a dream that includes the stark truths that they tell us about this world that we wake in.'
    }
  ];

  socials = [
    {
      description: "BurningAstra",
      url: "https://www.facebook.com/BurningAstra/",
      img: "/images/icons/website.png"
    }
  ];

  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


}
