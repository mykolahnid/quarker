import { Particle } from 'app/particle.model';
import { Fraction } from 'app/shared/fraction';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as _ from 'lodash';

@Injectable()
export class ParticlesService {
  private existingParticles: Particle[] = [];
  knownParticles: Particle[] = [];
  private unknownParticles: Particle[] = [];
  unknownNames: string[] = [];
  studiedParticle: Particle = new Particle();

  constructor(private db: AngularFireDatabase) {
    console.log('service constructor');

    this.db.list<Particle>('/existingParticles').valueChanges().subscribe(
      particles => {
        this.existingParticles = _.map(particles, (particle) =>
          new Particle(particle));
        this.existingParticles.forEach(exp => this.unknownParticles.push(exp));
        this.mapUnknownNames();
        this.assignStudiedParticle();
      }
    );
  }

  checkParticle(particle: Particle): boolean {
    this.existingParticles.forEach(element => {
      if (element.equals(particle) && element.name === particle.name) {
        this.knownParticles.push(element);
        for (let i = 0; i < this.unknownParticles.length; i++) {
          if (this.unknownParticles[i].equals(element)) {
            this.unknownParticles.splice(i, 1);
            this.mapUnknownNames();
            this.assignStudiedParticle();
            break;
          }
        }
        return true;
      }
    });
    return false;
  }

  private assignStudiedParticle() {
    const i = Math.floor(Math.random() * (this.unknownParticles.length - 1))
    Object.assign(this.studiedParticle, this.unknownParticles[i]);
    this.studiedParticle.name = '';
  }

  private mapUnknownNames() {
    this.unknownNames.splice(0, this.unknownNames.length);
    this.unknownParticles.forEach(unp => this.unknownNames.push(unp.name));
  }
}
