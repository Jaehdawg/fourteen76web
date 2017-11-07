import {Routes, RouterModule} from '@angular/router';

//main components
import {ArtistsComponent} from './views/Mviews/artists.component';
import {HomeComponent} from './views/Mviews/home.component';
import {CalendarComponent} from './views/Mviews/calendar.component';
import {MusicComponent} from './views/Mviews/music.component';
import {FoodComponent} from './views/Mviews/food.component';
import {PhotographyComponent} from './views/Mviews/photography.component';
import {SubmitComponent} from './views/Mviews/submit.component';
import {SubscribeComponent} from './views/Mviews/subscribe.component';
import {ElseComponent} from './views/Mviews/else.component';
//articles
import {PerfumeGenius} from './views/posts/articles/perfume.component';
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


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home',  pathMatch: 'full'},
  //main pages
  {path: 'home', component: HomeComponent},
  {path: 'else', component: ElseComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'music', component: MusicComponent},
  {path: 'food', component: FoodComponent},
  {path: 'photography', component: PhotographyComponent},
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








];

export const routing = RouterModule.forRoot(APP_ROUTES);
