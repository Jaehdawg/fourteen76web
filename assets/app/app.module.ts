import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//unlocks http service
// import {HttpModule} from '@angular/http';

import {MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule} from '@angular/material';

//main components
import {AppComponent} from './app.component';
import {HomeComponent} from './views/Mviews/home.component';
import {HeaderComponent} from './navigation/header.component';
import {ArtistsComponent} from './views/Mviews/artists.component';
import {CalendarComponent} from './views/Mviews/calendar.component';
import {MusicComponent} from './views/Mviews/music.component';
import {FoodComponent} from './views/Mviews/food.component';
import {PhotographyComponent} from './views/Mviews/photography.component';
import {SubmitComponent} from './views/Mviews/submit.component';
import {SubscribeComponent} from './views/Mviews/subscribe.component';
import {ElseComponent} from './views/Mviews/else.component';
//posts vvv
//articles
import {PerfumeGenius} from './views/posts/articles/perfume.component';

import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ElseComponent,
    ArtistsComponent,
    CalendarComponent,
    MusicComponent,
    FoodComponent,
    PhotographyComponent,
    SubmitComponent,
    SubscribeComponent,
    PerfumeGenius
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
