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
    if(this.message.title == "Community Event"){
      return this.message.title = "New Community Event";
    };
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
    };
    
    if(this.message.month == "1"){
        return this.message.month = "January";
      } else if(this.message.month == "2"){
        return this.message.month = "February";
      } else if(this.message.month == "3"){
        return this.message.month = "March";
      } else if(this.message.month == "4"){
        return this.message.month = "April";
      } else if(this.message.month == "5"){
        return this.message.month = "May";
      } else if(this.message.month == "6"){
        return this.message.month = "June";
      } else if(this.message.month == "7"){
        return this.message.month = "July";
      } else if(this.message.month == "8"){
        return this.message.month = "August";
      } else if(this.message.month == "9"){
        return this.message.month = "September";
      } else if(this.message.month == "10"){
        return this.message.month = "October";
      } else if(this.message.month == "11"){
        return this.message.month = "November";
      } else if(this.message.month == "12"){
        return this.message.month = "December";
      } else {
        return this.message.month = "Month";
      };
  }

}
