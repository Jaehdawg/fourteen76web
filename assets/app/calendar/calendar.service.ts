import {Injectable, EventEmitter} from '@angular/core';
import { Message } from "./event.model";
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
@Injectable()
export class EventService {
    private messages: Message[] = [];
    //emits message object    v
    messageIsEdited = new EventEmitter<Message>();

    constructor(private http: Http){}

    //we return http since we create an observable in the component later on
    getMessages() {
        return this.http.get('http://localhost:1476/events')
              .map((response: Response) => {
                const messages = response.json().obj;
                //v  this transforms the result into what we want on the front end ex: (minus: _v, _id ...)
                let transformedMessages: Message[] = [];
                for(let message of messages) {
                  transformedMessages.push(new Message(
                    message.title,
                    message.description,
                    message.month,
                    message.day,
                    message.time,
                    message.venue,
                    message.address,
                    message.admission,
                    message.type,
                    message.url,
                    message._id,
                    null
                  ));
                }
                //so the array being returned is the same as in the add message service
                //keeps them all in sync
                this.messages = transformedMessages;
                //we have to return since the map function expexts something to 'Observe'
                return transformedMessages;
              })
              .catch((error: Response) => Observable.throw(error.json()));
    };
    getMessagesArts() {
        return this.http.get('http://localhost:1476/events/arts')
              .map((response: Response) => {
                const messages = response.json().obj;
                //v  this transforms the result into what we want on the front end ex: (minus: _v, _id ...)
                let transformedMessages: Message[] = [];
                for(let message of messages) {
                  transformedMessages.push(new Message(
                    message.title,
                    message.description,
                    message.month,
                    message.day,
                    message.time,
                    message.venue,
                    message.address,
                    message.admission,
                    message.type,
                    message.url,
                    message._id,
                    null
                  ));
                }
                //so the array being returned is the same as in the add message service
                //keeps them all in sync
                this.messages = transformedMessages;
                //we have to return since the map function expexts something to 'Observe'
                return transformedMessages;
              })
              .catch((error: Response) => Observable.throw(error.json()));
    };
    getMessagesMusic() {
        return this.http.get('http://localhost:1476/events/music')
              .map((response: Response) => {
                const messages = response.json().obj;
                //v  this transforms the result into what we want on the front end ex: (minus: _v, _id ...)
                let transformedMessages: Message[] = [];
                for(let message of messages) {
                  transformedMessages.push(new Message(
                    message.title,
                    message.description,
                    message.month,
                    message.day,
                    message.time,
                    message.venue,
                    message.address,
                    message.admission,
                    message.type,
                    message.url,
                    message._id,
                    null
                  ));
                }
                //so the array being returned is the same as in the add message service
                //keeps them all in sync
                this.messages = transformedMessages;
                //we have to return since the map function expexts something to 'Observe'
                return transformedMessages;
              })
              .catch((error: Response) => Observable.throw(error.json()));
    };
    getMessagesCommunity() {
        return this.http.get('http://localhost:1476/events/community')
              .map((response: Response) => {
                const messages = response.json().obj;
                //v  this transforms the result into what we want on the front end ex: (minus: _v, _id ...)
                let transformedMessages: Message[] = [];
                for(let message of messages) {
                  transformedMessages.push(new Message(
                    message.title,
                    message.description,
                    message.month,
                    message.day,
                    message.time,
                    message.venue,
                    message.address,
                    message.admission,
                    message.type,
                    message.url,
                    message._id,
                    null
                  ));
                }
                //so the array being returned is the same as in the add message service
                //keeps them all in sync
                this.messages = transformedMessages;
                //we have to return since the map function expexts something to 'Observe'
                return transformedMessages;
              })
              .catch((error: Response) => Observable.throw(error.json()));
    };


}
