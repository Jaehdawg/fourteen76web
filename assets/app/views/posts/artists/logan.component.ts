import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Logan implements OnInit {
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
      '/images/artists/logan/one.png',
      '/images/artists/logan/two.png',
      '/images/artists/logan/three.png',
      '/images/artists/logan/four.png',
      '/images/artists/logan/five.png',
      '/images/artists/logan/six.png',
      '/images/artists/logan/seven.png',
      '/images/artists/logan/eight.png',
      '/images/artists/logan/nine.png'
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

  postTitle = 'Lagan Tanner';
  postImage = "/images/headImages/logan.jpg";

  qa1 = [
    {
      q: 'For your work with pixels, you use Microsoft Paint, correct?',
      a: `I'm not that masochistic. I used MSPaint for years until I realized that there were programs designed specifically for pixel art. These days I make all of my pixel art using Grafx2, which is modelled after a classic pixel art program called DeluxePaint that originally debuted on the Commodore Amiga, before I was born. A good pixel art program will make things much more efficient, which is vital in such a tedious medium.`
    }
  ];
  qa2 = [
    {
      q: `Scrolling through forums like pixel joint, I see there are lots of truly talented pixel artists out there. Though you're the first I've seen using the medium so extensively in the realm of Fine Art. Personally, I'm a fan, though I can't help but wonder if you've caught any flack from the art world for using a medium some may classify as 'low brow' or 'post-internet', especially in regard to more minimal pieces like "Walk the Plank".`,
      a: `It's interesting that you mention "Walk the Plank", because it's an homage to a painting by Roy Lichtenstein. I'm not really a huge fan of Lichtenstein's work, but he was pushing the boundaries of fine art back in the 60's with Pop Art based on comic books. So that door has been opened for me, the difference is I'm using pixels instead of Ben-Day dots.`,
      a2: `"Walk the Plank" is also a special case in that it's a direct reference to video games, which is fortunate, because people are going to think of video games as soon as they see the pixels. The difficulty comes with creating something that maintains a pixelly aesthetic without reminding people of Mario and Minecraft, or seeming like a cheap plea to the viewer's nostalgia.`
    },
    {
      q: `From paints to pixels to sculpture, you seem to be quite the versatile dude. How would you say multimedia has enriched and influenced your creative process?`,
      a: `There's a lot of cross-pollination. When I started painting, I carried over what I learned from pixel art about color theory and palette management. After learning how to paint, I translated some of my paintings into pixel art, which gives them a fluidity that I think is difficult to achieve with a computer alone. And lately I've been experimenting with printing out pixel art on canvas, then painting on top of it. And all the while, sculpture has helped me think about form when I paint and pixel. It's a constant conversation.`
    },
    {
      q: `Polluck or potluck?`,
      a: `I saw Pollock's work in Atlanta a few years back (on loan from the MoMA). It blew me away. Since I paint representationally, people sometimes assume I must not like Abstract Expressionism, and they feel free to tell me how their kid can paint better than the schlock they see in museums.
      Phillistines! Begone!`,
      a2: `Potlucks, though... church potlucks were such a huge part of my upbringing. Like those oldschool hymns I still find myself inadvertently humming. Churches these days have mostly replaced the organs with 4-piece rock bands, and order pizzas instead of organizing potlucks. It's a shame, the music is so shallow and the food so impersonal.`,
      a3: `This one is a tie, I think.`
    },
    {
      q: `"Relics", "Hog", and "Newt" have a particular honesty about them in reference to the South. Do you have any sort of intention when you portray Southern American moments like these?`,
      a: `I wanted to faithfully represent Southern culture. It's easy to make shallow work about the South. Grits kitsch- an idealized and cliched South that belongs in a Cracker Barrel. It can be difficult to capture an image of the South that feels authentic, because the South is so often parodied and mythologized. I approach the South and its culture through my family's deep roots in Alabama. "Newt" is a portrait of my great-grandfather, and the farmer in "Hog" is his father. They are both based on family photos I borrowed from my grandmother's house, which is also where I found the objects in "Relics." My motivation is split between trying to discover the beating heart of Southern culture and uncovering my family's history. Both lines of inquiry are ultimately about understanding my own identity.`
    }
  ];

  socials = [
    {
      description: "LoganTannerArt",
      url: "https://www.facebook.com/LoganTannerArt/?fref=ts",
      img: "/images/icons/website.png"
    }
  ];

  shareFacebook = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/don_gero.html";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";


}
