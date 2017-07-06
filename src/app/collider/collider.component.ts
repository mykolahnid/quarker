import { Component, OnInit } from '@angular/core';
import { Particle } from 'app/particle.model';

@Component({
  selector: 'app-collider',
  templateUrl: './collider.component.html',
  styleUrls: ['./collider.component.css']
})
export class ColliderComponent implements OnInit {
  particle: Particle = new Particle();
  constructor() { }

  ngOnInit() {
  }

}
