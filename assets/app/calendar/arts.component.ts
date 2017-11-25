import {Component, OnInit} from '@angular/core';
import { Message } from "./event.model";
import { EventService } from "./calendar.service";

@Component ({
  selector: 'arts-calendar',
  template: `
      <div class="gridTest">
        <calendar-event
          class="item"
          [message]="message"
          *ngFor="let message of messages">
        </calendar-event>
      </div>
  `

})
export class ArtsComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: EventService) {}

  ngOnInit() {
        this.messageService.getMessagesArts()
            .subscribe(
              (messages: Message[]) => {
                this.messages = messages;
              }
            );
    }

}
