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
  strings: string[] = ["anna", "beta"];

  constructor(private particlesService: ParticlesService) {
  }

  ngOnInit() {
    this.studiedParticle = this.particlesService.studiedParticle;
    this.unknownNames = this.particlesService.unknownNames;
  }

  private checkParticle(name: string) {
    console.log(name);
    // this.studiedParticle.name = name;
    // this.particlesService.checkParticle(this.studiedParticle);
  }

  check() {
    console.log(this.unknownNames.length);
    console.log(this.studiedParticle);
  }


}
