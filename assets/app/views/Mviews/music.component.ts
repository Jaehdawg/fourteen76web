import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component ({
  selector: 'app-music',
  templateUrl: './templates/music.component.html'

})
export class MusicComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Music');
  }
}
