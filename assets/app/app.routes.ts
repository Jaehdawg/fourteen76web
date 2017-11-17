import {Routes, RouterModule} from '@angular/router';

//main components
import {ArtistsComponent} from './views/Mviews/artists.component';
import {ArtistsTwoComponent} from './views/Mviews/artists2.component';
import {HomeComponent} from './views/Mviews/home.component';
import {HomeTwoComponent} from './views/Mviews/home2.component';
import {CalendarComponent} from './views/Mviews/calendar.component';
import {MusicComponent} from './views/Mviews/music.component';
import {FoodComponent} from './views/Mviews/food.component';
import {PhotographyComponent} from './views/Mviews/photography.component';
import {PhotographyTwoComponent} from './views/Mviews/photography2.component';
import {PhotographyThreeComponent} from './views/Mviews/photography3.component';
import {SubmitComponent} from './views/Mviews/submit.component';
import {SubscribeComponent} from './subscribe/subscribe.component';
import {ElseComponent} from './views/Mviews/else.component';
//articles
import {PerfumeGenius} from './views/posts/articles/perfume.component';
import {Colour} from './views/posts/articles/colours.component';
import {Girlpool} from './views/posts/articles/girlpool.component';
import {BloodComponent} from './views/posts/articles/blood.component';
import {UpperRoom} from './views/posts/articles/upperroom.component';
import {PsychicHotline} from './views/posts/articles/psychic.component';
import {DeadBalloons} from './views/posts/articles/balloons.component';
import {SleepDrive} from './views/posts/articles/sleepdrive.component';
import {MarriageComponent} from './views/posts/articles/marriage.component';
import {LostSloss} from './views/posts/articles/lostsloss.component';
import {NickRocks} from './views/posts/articles/thenick.component';
import {EroticaComponent} from './views/posts/articles/erotica.component';
import {ZypComponent} from './views/posts/articles/zyp.component';
import {HeirloomComponent} from './views/posts/articles/heirloom.component';
import {CarrigansComponent} from './views/posts/articles/carrigans.component';
//photography
import {BikeJoust} from './views/posts/photography/joust.component';
import {Gon} from './views/posts/photography/gon.component';
import {DieTrying} from './views/posts/photography/dietrying.component';
import {PrideParade} from './views/posts/photography/prideparade.component';
import {LostLands} from './views/posts/photography/lostlands.component';
import {CrackerPackers} from './views/posts/photography/crackers.component';
import {Trump} from './views/posts/photography/trump.component';
import {Gumbo} from './views/posts/photography/gumbo.component';
import {Sandlings} from './views/posts/photography/sandlings.component';
import {Malverns} from './views/posts/photography/malverns.component';
import {NoNames} from './views/posts/photography/nonames.component';
import {Ghouls} from './views/posts/photography/ghouls.component';
import {Ireland} from './views/posts/photography/ireland.component';
import {NewYork} from './views/posts/photography/newyork.component';
import {ThomasHall} from './views/posts/photography/thomashall.component';
import {MilesTwist} from './views/posts/photography/milestwist.component';
import {Yoav} from './views/posts/photography/yoav.component';
import {Endangered} from './views/posts/photography/endangered.component';
import {Winter} from './views/posts/photography/winter.component';
import {LastGeneration} from './views/posts/photography/lastgeneration.component';
import {Byron} from './views/posts/photography/byron.component';
import {Isla} from './views/posts/photography/isla.component';
import {Brian} from './views/posts/photography/brian.component';
import {Fiesta} from './views/posts/photography/fiesta.component';
import {CycleFest} from './views/posts/photography/cyclefest.component';
import {Aerius} from './views/posts/photography/aerius.component';
import {Skate} from './views/posts/photography/skate.component';
import {Fashion} from './views/posts/photography/fashion.component';
import {Twilight} from './views/posts/photography/twilight.component';
import {Blm} from './views/posts/photography/blm.component';
import {SkateFund} from './views/posts/photography/skatefund.component';
import {Untitled} from './views/posts/photography/untitled.component';
import {LaundryPunk} from './views/posts/photography/laundrypunk.component';
import {Twelve} from './views/posts/photography/twelveweeks.component';

//artists
import {Merrilee} from './views/posts/artists/merrilee.component';
import {Amy} from './views/posts/artists/amy.component';
import {Marbles} from './views/posts/artists/marbles.component';
import {Caroline} from './views/posts/artists/caroline.component';
import {William} from './views/posts/artists/william.component';
import {Sara} from './views/posts/artists/sara.component';
import {Chris} from './views/posts/artists/chris.component';
import {Katelyn} from './views/posts/artists/katelyn.component';
import {Rizzo} from './views/posts/artists/rizzo.component';
import {Gaijin} from './views/posts/artists/gaijin.component';
import {Hannah} from './views/posts/artists/hannah.component';
import {Christina} from './views/posts/artists/christina.component';
import {Andrea} from './views/posts/artists/andrea.component';
import {Leah} from './views/posts/artists/leah.component';
import {Logan} from './views/posts/artists/logan.component';
import {ByronA} from './views/posts/artists/byron.component';
import {Lewis} from './views/posts/artists/lewis.component';
import {Princess} from './views/posts/artists/princess.component';

//videos
import {DonGero} from './views/posts/videos/dongero.component';
import {Boom} from './views/posts/videos/boom.component';
import {Homeward} from './views/posts/videos/homeward.component';
import {HeavyUser} from './views/posts/videos/heavyuser.component';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home',  pathMatch: 'full'},
  //main pages
  {path: 'home', component: HomeComponent},
  {path: 'home/2', component: HomeTwoComponent},
  {path: 'else', component: ElseComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'artists/2', component: ArtistsTwoComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'music', component: MusicComponent},
  {path: 'food', component: FoodComponent},
  {path: 'photography', component: PhotographyComponent},
  {path: 'photography/2', component: PhotographyTwoComponent},
  {path: 'photography/3', component: PhotographyThreeComponent},
  {path: 'submit', component: SubmitComponent},
  {path: 'subscribe', component: SubscribeComponent},
  //articles
  {path: 'PerfumeGenius', component: PerfumeGenius},
  {path: 'BloodEquality', component: BloodComponent},
  {path: 'UpperRoom', component: UpperRoom},
  {path: 'PsychicHotline', component: PsychicHotline},
  {path: 'DeadBalloons', component: DeadBalloons},
  {path: 'SleepDrive', component: SleepDrive},
  {path: 'Marriage', component: MarriageComponent},
  {path: 'LostSloss', component: LostSloss},
  {path: 'TheNick', component: NickRocks},
  {path: 'ArtErotica', component: EroticaComponent},
  {path: 'Zyp', component: ZypComponent},
  {path: 'Heirloom', component: HeirloomComponent},
  {path: 'StreetSoul', component: CarrigansComponent},
  {path: 'LivingColour', component: Colour},
  {path: 'Girlpool', component: Girlpool},

  //Photography
  {path: 'BikeJoustV', component: BikeJoust},
  {path: 'Gon', component: Gon},
  {path: 'DieTrying', component: DieTrying},
  {path: 'PrideParade', component: PrideParade},
  {path: 'LostLands', component: LostLands},
  {path: 'CrackerPackers', component: CrackerPackers},
  {path: 'RallyAgainstTrump', component: Trump},
  {path: 'GumboGala', component: Gumbo},
  {path: 'Sandlings', component: Sandlings},
  {path: 'TheMalverns', component: Malverns},
  {path: 'NoNames', component: NoNames},
  {path: 'MurderedGhouls', component: Ghouls},
  {path: 'Ireland', component: Ireland},
  {path: 'NYPerspectives', component: NewYork},
  {path: 'ThomasHall', component: ThomasHall},
  {path: 'MilesTwist', component: MilesTwist},
  {path: 'YoavPelli', component: Yoav},
  {path: 'EndangeredSpecies', component: Endangered},
  {path: 'WisconsinWinter', component: Winter},
  {path: 'LastGeneration', component: LastGeneration},
  {path: 'ByronSonnierPhotography', component: Byron},
  {path: 'IslaDeMagia', component: Isla},
  {path: 'BrianArnold', component: Brian},
  {path: 'FiestaBham', component: Fiesta},
  {path: 'Cyclefest16', component: CycleFest},
  {path: 'Aerius', component: Aerius},
  {path: 'Skate', component: Skate},
  {path: 'FashionWeek', component: Fashion},
  {path: 'TwilightChildren', component: Twilight},
  {path: 'BLMProtest', component: Blm},
  {path: 'SkateParkFundraiser', component: SkateFund},
  {path: 'Untitled', component: Untitled},
  {path: 'LaundryPunk', component: LaundryPunk},
  {path: 'TwelveWeeks', component: Twelve},

  //artists
  {path: 'MerrileeChalliss', component: Merrilee},
  {path: 'AmyVaughn', component: Amy},
  {path: 'MrMarbles', component: Marbles},
  {path: 'CarolineErb', component: Caroline},
  {path: 'WilliamWebb', component: William},
  {path: 'SarahRehmert', component: Sara},
  {path: 'CDSacco', component: Chris},
  {path: 'Rizzo', component: Rizzo},
  {path: 'GaijinX', component: Gaijin},
  {path: 'HannahBarrett', component: Hannah},
  {path: 'ChristinaDaniel', component: Christina},
  {path: 'AndreaReally', component: Andrea},
  {path: 'LeahThornton', component: Leah},
  {path: 'LoganTanner', component: Logan},
  {path: 'ByronSonnier', component: ByronA},
  {path: 'LewisAndQuasar', component: Lewis},
  {path: 'Princess4Princess', component: Princess},

  //videos
  {path: 'DonGero', component: DonGero},
  {path: 'Boom', component: Boom},
  {path: 'HomewardBound', component: Homeward},
  {path: 'HeavyUser', component: HeavyUser},
  {path: 'KatelynLedford', component: Katelyn},








];

export const routing = RouterModule.forRoot(APP_ROUTES);
