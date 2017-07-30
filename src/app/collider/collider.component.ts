import { Component, OnInit } from '@angular/core';
import { Particle } from 'app/particle.model';

@Component({
  selector: 'app-collider',
  templateUrl: './collider.component.html',
  styleUrls: ['./collider.component.css']
})
export class ColliderComponent implements OnInit {
  particle: Particle = new Particle();
  text: string = '1';
  constructor() { }

  ngOnInit() {
  }

  decCharge() {
    this.particle.charge.decrement();
    console.log(this.particle.charge);
    this.text += this.particle.charge;
  }

  incCharge() {
    this.particle.charge.increment();
  }

  decSpin() {
    this.particle.charge.decrement();
  }

  incSpin() {
    this.particle.spin.increment();
  }

}
