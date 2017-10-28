import {Component, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-perfume',
  templateUrl: './templates/perfume.component.html'

})
export class PerfumeGenius implements OnInit {
  constructor(private router: Router, private titleService: Title) {}



  postTitle = 'Perfume Genius';
  postImage = "/images/headImages/perfumehead.jpg";
  postSubtitle = "Interview by Blake Ells";

  shareFacebook = "https://www.facebook.com/fourteen76/";
  shareTwitter = "https://www.facebook.com/fourteen76/";
  shareEmail = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareGoogle = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";
  shareReddit = "mailto:?body=Check%20this%20out%20http://www.fourteen76.com/perfume_genius.html";

  // m# = main paragraphs
  //q# = questions
  //a# = answers
  //if multiple paragraph answers then add a p# for paragraph number. ex: a1p2
  paragraphs = {
    m1: `Perfume Genius has one of the year’s most critically acclaimed records, No Shape. It’s the brainchild of Mike Hadreas, a 36-year- old Seattle native now living in Tacoma, Washington. For this album, he
          teamed up with Blake Mills, the coveted producer behind work from the Alabama Shakes, Fiona Apple,
          John Legend and Conor Oberst.`,
    m2: `He shared more about realizing a new position as a role model, the evolution of his career, working with
          Mills and what he’s learned about people.`,
    q1: `You began your career a little later than most. What were you doing to pay the bills before that and
          what led you to music?`,
    a1: `Not much, really. I was working at a department store, making keys and mixing paint in the hardware section. A lot happened in my like, I guess, but also, not very much depending on who you’re comparing me to, I guess. [laughs]`,
    a1p2: `I ended up getting sober, which was a long process. I think that’s what made me start making music. I think I had an excess of memories and feelings and things that I had kind of stuffed down or things that I had not been paying attention to or was aware of and I was overwhelmed by them and I needed somewhere to put them. Music was a way for me to patiently go through a bunch of not so cozy memories and a lot of feelings that were overwhelming. It allowed me to step back and see the    big picture in a healthy way. I had been stepping back in an unhealthy way for a long time.`,
    q2: `Had you played music at any point in your life before that or did you just pick it up?`,
    a2: `I took some piano lessons and I’ve always been an obsessive music fan. It’s always been a part of my life. But I never wrote a song until maybe I was 25. I tried! It just never really made sense; never really seemed natural. I had tried to sing my whole life, but I finally figured out how to do it. Or…I just let myself. I’m not really certain which one [happened] as I got older.`,
    q3: `How did Blake Mills influence the sound of No Shape?`,
    a3: `I wanted the whole sound to be made in the studio and I didn’t want it to be based around piano. On my demos, all of the piano was just a placeholder. I wanted it to be guitar – I wanted it to have a warm, “bandy” feeling, and I wanted some of the songs to sounds like stadium anthems, but still in a fucked up way. Not in a traditional way.`,
    a3p2: `That’s one of the reasons that I worked with Blake. Beyond him being just having really good taste – we liked a lot of the same things, he’s an amazing guitar player and has a way of playing guitar and listening and playing music that has that quality of something you know and have already loved, but there’s something new and a little strange about it. So I took all of my songs to him and we used them as a map and made the whole sounds together in the studio.`,
    q4: `Was it challenging to recreate that in a live show?`,
    a4: `The last album, I had the same band that I am traveling with now. But there are definitely way more elements on this album than there were or even on the third album, which was still a step up from how I used to play. I don’t really think about that when I’m recording. I’m loyal to the recording. I don’t mind it having 3,000 things on it if that’s what’s gonna make the song better. But it does make it more difficult to figure out how you’re gonna do it live if you’re not rich. [laughs] Eventually, I’d like to travel with a choir or something, but for now, I’ll just try to make it have the same amount of power and same feeling even if it has to be communicated a little differently.`,
    a4p2: `We could just use a bunch of backing tracks, which we do sometimes. But I feel like you need to cut things out. I hate going to shows that are too slick or sound too much like the album, because I would rather just listen to the album at home [laughs]. If it’s too clean and perfect and it sounds too much like the record, there’s no real point in going to the show in my opinion.`,
    q5: `You used the term “arena rock,” and there are some of the heavier guitar moments on the record that almost have a Queen feel to them. Was that ever an influence?`,
    a5: `Yes, though I was thinking of Springsteen a lot more when I was writing. I don’t know if everyone else that was playing was, but that was my weird “dude” influence that I was thinking of. Maybe Queen is just in my blood, I guess, because I get that a lot. But I’ve never really been a big fan of his – I’ve liked everything I’ve heard. Sometimes people think I’m influenced by things that I’m not, necessarily, but then I listen to it and become deeply influenced by it.`,
    q6: `What’s your favorite Springsteen record?`,
    a6: `<i>Nebraska</i>. That’s the one that I’ve spent a lot of time with as an album, beyond just listening to the hits and stuff.`,
    q7: `From afar, it would seem like Seattle would be more progressive than other places in America, but that’s not the experience that you had there in your youth. Do you think Seattle has as far to go as anywhere else in the country?`,
    a7: `Maybe not <i>anywhere</i> else, but I just think young people in general aren’t accepting. I don’t think it’s easy for any young person that’s different anywhere. It’s relative; it’ll be <i>worse</i>, you’ll have a worse childhood somewhere that’s widely super conservative or religious than somewhere that’s more liberal. But kids are still vicious psychopaths, I think. Some people never grow out of it, but some people do. And I’m sure it was easier for me then than it was 20 years earlier being a feminine, weird guy.`,
    a7p2: `But you’re never even safe from yourself when you’re that young. You have no idea what’s going on. You could be anywhere, really. I don’t know how to explain it; you’re so self-absorbed and so in your own thing and you give yourself as much [expletive] as anyone else gives you.`,
    q8: `As a teen in Seattle, what artist gave you the strength to be comfortable with your own sexuality and in your own skin?`,
    a8: `I got the Liz Phair CD <i>Exile in Guyville</i> when I was 13 and that completely changed music for me. I was mostly listening to Top 40 and pop music until I was 12, then I got that album with my babysitting money.`,
    a8p2: `I stole a <i>SPIN magazine</i> from the grocery store. There was an article about her in it and it talked about how scandalous her lyrics were and how she’d had problems with stage fright. I became very interested in it and I got the album and it scandalized me, but in the best way. I didn’t know you could talk about those things, let alone sing about them. And she was singing about sex in such a proud, unashamed, unapologetic way. All of those feelings to me were very shameful [laughs]. So that was really moving to me.`,
    q9: `You’ve covered artists far different from you – artists like Grateful Dead and Elvis Presley. How did you find inspiration in that rock sound and turn it into your own?`,
    a9: `I love a lot of Elvis ballads because they’re so heavy with feeling and desperation but they can’t – there’s some sex in there and darkness and stuff in a lot of older songs, but they can’t come right out and say any of it because nobody would put it on the radio or people would freak out. I kind of like how messed up and in-between the lines the whole fucked-up-ness of that is.`,
    a9p2: `With the Grateful Dead, they asked me to do that cover for the benefit record. I wasn’t really familiar with the song, and I pretty much thought that I would hate it, to be honest. But I found that song, “To Lay Me Down,” to be such a beautiful song. It’s almost like a hymn.`,
    q10: `What led you back to Washington and how much has it changed over those 20 years?`,
    a10: `It’s an easy place to be. I don’t know why, really, it just doesn’t seem as fast as other bigger cities. You feel like you can dawdle a little bit. It’s definitely different now. There are a lot of tech people moving in and making the rent go up.`,
    a10p2: `Where I used to live, you wouldn’t see a family. But now there’s hella kids. Kids are fine or whatever, but once families move in, the weirdos have to get pushed out. But the weirdos pushed someone else out. It’s all a growth.`,
    a10p3: `But I don’t feel like living around a bunch of tech bros, even if my restaurant is still there. Because my restaurant is surrounded by weird diaper shops.`,
    q11: `What's the restaurant?`,
    a11: `Well there’s this restaurant called Charlie’s. It wasn’t a really good restaurant, but I went there all the time and my friends would always get so mad at me for just gunning for that restaurant. It’s not good, really. The service was bad. It was weird. The food wasn’t good. But there was something so charming to it. And I like a dark restaurant with a good booth.`,
    a11p2: `The burger was pretty good. There were tons of characters. There’s always weird meetings of weird groups there. Real weirdos, and that comforts me. That’s the America that I like: burgers and sci/fi nerds.`,
    q12: `How do we get people to listen to one another rather than shout at one another?`,
    a12: `I don’t fucking know, because most of the time, people aren’t going to listen to you unless you’re yelling. I noticed that when my music got louder is when people actually seemed to start listening to it, especially in America. A lot of people – especially marginalized groups – nobody’s listening to them. You have to yell so loud and you have to make such a [expletive] fuss for even something to change just a little bit and change is so slow. You have to scream and die and fight for just a tiny amount of change.`,
    a12p2: `So I don’t really get mad at people yelling. I don’t judge people for screaming.`,
    a12p3: `The reasons that people dislike me are baffling. It’s an inherent thing, it’s who I am; there’s nothing I can do about it. But I still get resistance and hate for it. What do you do about that? It’s an exhausting, baffling thing. And sometimes you don’t want to try to dismantle it or try to talk to someone or teach them something or try to make them more accepting. Sometimes you just want to do your thing and have them shut the fuck up...`,
    q13: `What have your experiences been like in the Deep South?`,
    a13: `It’s mostly just in and around the venue. But I had never visited the South; I don’t have any family there. It definitely teaches you that places aren’t always like you learned. You have this notion of how people are going to be and that’s not necessarily true everywhere. You hear about the South and you know that it’s more religious – and that makes me nervous. But I’ve met some of the friendliest and most accepting people down here that are truly, earnestly more kind and accepting than [expletive] in the North. I think it’s all kinda [expletive] in the end.`,
    q14: `During the last election, we were broken down into an urban and rural divide rather than a Northern and Southern one. Have you found that to be true?`,
    a14: `I don’t know…when you look at the map – like a Trump map – that’s scary [laughs]. You don’t want to go to a Trump map place [laughs]. But I know that the people that are coming to my shows that I come in contact with – they’re not part of the Trump map. But there’s a lot of fucked up people everywhere. And I have no idea because I didn’t grow up here. I don’t know what stereotypes are true and which ones aren’t. I don’t know enough to talk shit.`,
    q15: `How do you carry the responsibility of being a positive influence on young LGBTQ kids?`,
    a15: `Like I said, I was working at a store before. I definitely didn’t have a lot of purpose. I definitely wasn’t helpful to anybody. Maybe my brother and my family, but barely [laughs]. So I don’t mind the pressure of that. It feels good. And I feel like maybe I’m doing something important. And that’s a really good feeling. It’s one of the only real good feelings I’ve ever had.`,
    q16: `Any chance that you and Alan are thinking about a family?`,
    a16: `Oh I don’t know…when I was 12, it was like, “Oh, well, okay, I’m never having children. I’m never getting married.” And I just came to accept that in my head. So this is a new thing. It’d probably be difficult. It’d probably cost a lot of money or something. Unless we wait like ten years and they can do some kind of lab growing. Which I used to be really scared of; I thought that baby would be unnatural or something. But I’m kind of into it now. Who am I to say who has a soul and who doesn’t? That’s fucked up. Why couldn’t a gay lab baby have just as pure of a soul as if I had the baby with a close friend or something [laughs]?`
  }

  scroll() {
    scrollTo(0, 0);
  }

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
  }
}
