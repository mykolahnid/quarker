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

  particles: Particle[] = [];

  constructor() {
    const higgs = new Particle();
    higgs.name = 'Higgs';
    higgs.mass = 125.09;
    higgs.massPower = 9;

    this.particles.push(higgs);
  }
}
