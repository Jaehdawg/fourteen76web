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






];

export const routing = RouterModule.forRoot(APP_ROUTES);
