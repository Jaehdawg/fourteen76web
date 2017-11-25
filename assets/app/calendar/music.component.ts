import {Component, OnInit} from '@angular/core';
import { Message } from "./event.model";
import { EventService } from "./calendar.service";

@Component ({
  selector: 'music-calendar',
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
export class MusicComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: EventService) {}

  ngOnInit() {
        this.messageService.getMessagesMusic()
            .subscribe(
              (messages: Message[]) => {
                this.messages = messages;
              }
            );
    }

}
