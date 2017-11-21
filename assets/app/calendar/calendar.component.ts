import {Component, OnInit} from '@angular/core';
import { Message } from "./event.model";
import { EventService } from "./calendar.service";

@Component ({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html'

})
export class CalendarComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: EventService) {}


  filterOneColor = '#fffff';

  filterOne(){
    this.filterOneColor = "e1f7d5";
  }
  filterTwo(){

  }
  filterThre(){

  }
  filterFour(){

  }

  ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
              (messages: Message[]) => {
                this.messages = messages;
              }
            );
    }

}
