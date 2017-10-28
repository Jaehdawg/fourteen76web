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


];

export const routing = RouterModule.forRoot(APP_ROUTES);
