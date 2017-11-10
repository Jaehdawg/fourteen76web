import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-artists',
  templateUrl: './templates/artists2.component.html'

})
export class ArtistsTwoComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  unactiveCircle = "none";
  activeCircle = "black";

  ngOnInit() {
    this.titleService.setTitle('Artists');
  }

}
