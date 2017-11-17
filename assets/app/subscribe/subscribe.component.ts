import {Component} from '@angular/core';

@Component ({
  selector: 'app-subcribe',
  templateUrl: './subscribe.component.html',
  stylesUrl: './subscribe.css';

})
export class SubscribeComponent {
  formDisplay: boolean = false;
  showForm() {
    this.formDisplay = true;
  }
}
