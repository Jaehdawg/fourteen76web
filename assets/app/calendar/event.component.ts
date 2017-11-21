import {Component, Input, AfterContentChecked} from '@angular/core';
import { Message } from "./event.model";
import { EventService } from "./calendar.service";

@Component ({
  selector: 'calendar-event',
  templateUrl: './event.component.html'

})
export class EventComponent implements AfterContentChecked {
  @Input() message: Message;


  eventBorder= "#fffff";
  iseventBorder = "3px solid";
  messageType: string = "";
  ngAfterContentChecked() {
    this.messageType = this.message.type;
    console.log(this.messageType);
    if(this.messageType == "1") {
      this.eventBorder = '#CADEBF';
    } else if(this.messageType == "2") {
      this.eventBorder = '#f1cbff';
    } else if(this.messageType == "3") {
      this.eventBorder = '#bae1ff';
    } else {
      this.eventBorder = "#fffff";
    }
  }

}
