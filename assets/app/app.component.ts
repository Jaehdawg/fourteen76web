import { Component} from '@angular/core';
import { MetaService } from 'ng2-meta'


@Component ({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(private metaService: MetaService) {}
}
