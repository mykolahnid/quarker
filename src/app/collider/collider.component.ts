import { Component, OnInit } from '@angular/core';
import { Particle } from 'app/particle.model';
import { Fraction } from 'app/shared/fraction';
import { ParticlesService } from 'app/shared/particles.service';

@Component({
  selector: 'app-collider',
  templateUrl: './collider.component.html',
  styleUrls: ['./collider.component.css']
})
export class ColliderComponent implements OnInit {
  unknownNames: string[];
  studiedParticle: Particle;

  constructor(private particlesService: ParticlesService) {
  }

  ngOnInit() {
    this.studiedParticle = this.particlesService.studiedParticle;
    this.unknownNames = this.particlesService.unknownNames;
  }

  private checkParticle(name: string) {
    const particle = new Particle(this.studiedParticle);
    particle.name = name;
    this.particlesService.checkParticle(particle);
  }
}
