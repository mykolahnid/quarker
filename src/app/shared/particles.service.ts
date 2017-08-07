import { Particle } from 'app/particle.model';
import { Fraction } from 'app/shared/fraction';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as _ from 'lodash';

@Injectable()
export class ParticlesService {
    private existingParticles: Particle[] = [];
    knownParticles: Particle[] = [];

    constructor(private db: AngularFireDatabase) {
        // const higgs = new Particle();
        // higgs.name = 'Higgs';
        // higgs.mass = 125.09;
        // higgs.massPower = 9;
        // higgs.charge = new Fraction(0, 3);
        // higgs.spin = new Fraction(0, 2);

        // this.existingParticles.push(higgs);
        // this.knownParticles.push(higgs);

        // const electron = new Particle();
        // electron.name = 'electron';
        // electron.mass = 0.511;
        // electron.massPower = 6;
        // electron.charge = new Fraction(-3, 3);
        // electron.spin = new Fraction(1, 2);

        // this.existingParticles.push(electron);

        (this.db.list('/existingParticles') as FirebaseListObservable<Particle[]>).subscribe(
            particles => {
                // console.log(particles[0].equals(particles[1]));
                const one: Particle = new Particle(particles[0]);
                const two: Particle = new Particle(particles[1]);
                console.log(one);
                console.log(two);
                console.log(two.charge);
                console.log(one.equals(two));
                this.existingParticles = _.map(particles, (particle) =>
                    new Particle(particle));
                // this.existingParticles.push(...particles);
                this.knownParticles.push(new Particle(particles[0]));
                // console.log(this.existingParticles);
                // console.log(particles);
            }
        );
    }

    checkParticle(particle: Particle) {
        let alreadyKnown = false;
        this.knownParticles.forEach(element => {
            if (element.equals(particle)) {
                alreadyKnown = true;
                return;
            }
        });

        if (alreadyKnown) {
            return;
        }

        this.existingParticles.forEach(element => {
            if (element.equals(particle)) {
                this.knownParticles.push(element);
            }
        });
    }
}
