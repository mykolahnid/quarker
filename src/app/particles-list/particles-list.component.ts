import { Component, OnInit, Input } from '@angular/core';
import { Particle } from 'app/particle.model';

@Component({
  selector: 'app-particles-list',
  templateUrl: './particles-list.component.html',
  styleUrls: ['./particles-list.component.css']
})
export class ParticlesListComponent implements OnInit {
  @Input() particles: Particle[];
  constructor() { }

  ngOnInit() {
  }

}
