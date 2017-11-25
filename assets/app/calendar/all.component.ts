import {Component, OnInit} from '@angular/core';
import { Message } from "./event.model";
import { EventService } from "./calendar.service";

@Component ({
  selector: 'all-calendar',
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
export class AllComponent implements OnInit {
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
