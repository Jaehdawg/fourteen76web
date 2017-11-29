import {Component} from '@angular/core';
import { NgForm } from "@angular/forms";

import {Email} from './email.model';
import {EmailService} from './email.service';
import {Location} from '@angular/common';


@Component ({
  selector: 'app-subscribe-element',
  templateUrl: 'email.component.html'
})

export class SubscribeElement {
  constructor(private emailService: EmailService, private _location: Location) {}
  formDisplay: boolean = false;

  emailPlaceholder: string = "Email"

  backClicked() {
       this._location.back();
   }

  showForm() {
    this.formDisplay = true;
  }
  onSubmit(form: NgForm) {
          //creating
          const email = new Email(form.value.email);
          this.emailService.addUser(email).subscribe(
            data => console.log(data),
            error => console.error(error)
          );
          form.resetForm();
        }
    }
