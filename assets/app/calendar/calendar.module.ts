import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {calendarRouting} from './calendar.routing';

import {AllComponent} from './all.component';
import {MusicComponent} from './music.component';
import {CommunityComponent} from './community.component';
import {ArtsComponent} from './arts.component';
import {EventComponent} from './event.component';

@NgModule ({
    declarations: [
        AllComponent,
        CommunityComponent,
        ArtsComponent,
        MusicComponent,
        EventComponent
      ],
      imports: [
        CommonModule,
        calendarRouting
      ]
})

export class CalendarModule {

}
