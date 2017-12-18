import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component ({
  selector: 'app-weareone',
  templateUrl: './weareone.component.html'
})
export class WeAreOne implements OnInit {
  constructor(private titleService: Title){}

  ngOnInit() {
    this.titleService.setTitle("We Are One");
  }
}
