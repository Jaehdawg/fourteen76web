import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-submit',
  templateUrl: './templates/submit.component.html'

})
export class SubmitComponent implements OnInit{
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Submit');
  }

}
