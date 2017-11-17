import { Component} from '@angular/core';
import {EmailService} from './subscribe/email.service';

@Component ({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [EmailService]
})

export class AppComponent {

}
