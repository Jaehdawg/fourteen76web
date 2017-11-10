import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-home',
  templateUrl: './templates/home.component.html'

})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  unactiveCircle = "none";
  activeCircle = "black";

  ngOnInit() {
    this.titleService.setTitle('Home');
  }

}
