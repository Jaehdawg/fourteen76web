import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-photo',
  templateUrl: './templates/photography2.component.html'

})
export class PhotographyTwoComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  unactiveCircle = "none";
  activeCircle = "black";

  ngOnInit() {
    this.titleService.setTitle('Photography');
  }

}
