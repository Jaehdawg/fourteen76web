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

  ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
              (messages: Message[]) => {
                this.messages = messages;
              }
            );
    }

}
