import { Component} from '@angular/core';
import {EmailService} from './subscribe/email.service';
import {EventService} from './calendar/calendar.service';

@Component ({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [EmailService, EventService]
})

export class AppComponent {

}
