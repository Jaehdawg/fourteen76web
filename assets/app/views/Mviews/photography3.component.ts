import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-photo',
  templateUrl: './templates/photography3.component.html'

})
export class PhotographyThreeComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  unactiveCircle = "none";
  activeCircle = "black";

  ngOnInit() {
    this.titleService.setTitle('Photography');
  }

}
