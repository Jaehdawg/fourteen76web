import {Routes, RouterModule} from '@angular/router';

import {AllComponent} from './all.component';
import {ArtsComponent} from './arts.component';
import {MusicComponent} from './music.component';
import {CommunityComponent} from './community.component';

const CALENDAR_ROUTES: Routes = [
  {path: '', redirectTo: 'all', pathmatch: 'full'},
  {path: 'all', component: AllComponent},
  {path: 'arts', component: ArtsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'community', component: CommunityComponent}
];

export const calendarRouting = RouterModule.forChild(CALENDAR_ROUTES);
