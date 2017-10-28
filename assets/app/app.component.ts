import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component ({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(){
    this.router.events.filter(event => event instanceof NavigationEnd)
    .subscribe(() => {
      const mainDiv = document.getElementById('container');
      mainDiv.scrollTop = 0;
    });
  }

}
