import {Component, Input, AfterContentChecked, OnInit} from '@angular/core';
import { Message } from "./event.model";
import { EventService } from "./calendar.service";

@Component ({
  selector: 'calendar-event',
  templateUrl: './event.component.html'

})
export class EventComponent implements AfterContentChecked, OnInit {
  @Input() message: Message;


  eventBorder= "#fffff";
  iseventBorder = "3px solid";
  messageType: string = "";
  ngAfterContentChecked() {
    this.messageType = this.message.type;
    if(this.messageType == "1") {
      this.eventBorder = '#CADEBF';
    } else if(this.messageType == "2") {
      this.eventBorder = '#f1cbff';
    } else if(this.messageType == "3") {
      this.eventBorder = '#bae1ff';
    } else {
      this.eventBorder = "#fffff";
    };
  }
  ngOnInit(){
    if(this.message.month == "1"){
        return this.message.month = "Jan";
      } else if(this.message.month == "2"){
        return this.message.month = "Feb";
      } else if(this.message.month == "3"){
        return this.message.month = "Mar";
      } else if(this.message.month == "4"){
        return this.message.month = "Apr";
      } else if(this.message.month == "5"){
        return this.message.month = "May";
      } else if(this.message.month == "6"){
        return this.message.month = "June";
      } else if(this.message.month == "7"){
        return this.message.month = "July";
      } else if(this.message.month == "8"){
        return this.message.month = "Aug";
      } else if(this.message.month == "9"){
        return this.message.month = "Sept";
      } else if(this.message.month == "10"){
        return this.message.month = "Oct";
      } else if(this.message.month == "11"){
        return this.message.month = "Nov";
      } else if(this.message.month == "12"){
        return this.message.month = "Dec";
      } else {
        return this.message.month = "Month";
      };
  }


}
