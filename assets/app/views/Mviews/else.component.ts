import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-else',
  templateUrl: './templates/else.component.html'

})
export class ElseComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Else');
  }
}
