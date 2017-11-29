import {Injectable, EventEmitter} from '@angular/core';
import { Email } from "./email.model";
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class EmailService {
  constructor(private http: Http){}

  addUser(email: Email) {
        const body = JSON.stringify(email);
        const headers = new Headers({'Content-Type': 'application/json'});
        //v  sets up observable
        return this.http.post('http://www.fourteen76.com/subscribe', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
            //.map() allows you to transform data
    }

}
