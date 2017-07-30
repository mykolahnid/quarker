import { Component } from '@angular/core';
import { Particle } from 'app/particle.model';
import { Fraction } from 'app/shared/fraction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
  }
}
