import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Particle } from 'app/particle.model';
import { ParticlesService } from 'app/shared/particles.service';

@Component({
  selector: 'app-particles-list',
  templateUrl: './particles-list.component.html',
  styleUrls: ['./particles-list.component.css']
})
export class ParticlesListComponent implements OnInit {
  particles: Particle[];
  cols: number[] = [1, 2, 3, 4, 5];
  rows: number[] = [1, 2, 3, 4];

  constructor(private particlesService: ParticlesService) { }

  ngOnInit() {
    this.particles = this.particlesService.knownParticles;
  }
}
