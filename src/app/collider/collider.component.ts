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
  particle: Particle = new Particle();
  text: string = '1';

  constructor(private particlesService: ParticlesService) {
  }

  ngOnInit() {
  }

  decCharge() {
    // TODO: charge should not be called from outside; particle should know that it should decrement charge by 1/3
    this.particle.charge.decrement();
    // call service to check whether particle is one of known particles
    this.checkParticle();
  }

  incCharge() {
    this.particle.charge.increment();
    this.checkParticle();
  }

  decSpin() {
    this.particle.spin.decrement();
    this.checkParticle();
  }

  incSpin() {
    this.particle.spin.increment();
    this.checkParticle();
  }

  private checkParticle() {
    this.particlesService.checkParticle(this.particle);
  }

}
