import { Particle } from 'app/particle.model';
import { Fraction } from 'app/shared/fraction';


export class ParticlesService {
    private existingParticles: Particle[] = [];
    knownParticles: Particle[] = [];

    constructor() {
        const higgs = new Particle();
        higgs.name = 'Higgs';
        higgs.mass = 125.09;
        higgs.massPower = 9;
        higgs.charge = new Fraction(0, 3);
        higgs.spin = new Fraction(0, 2);

        this.existingParticles.push(higgs);
        this.knownParticles.push(higgs);

        const electron = new Particle();
        electron.name = 'electron';
        electron.mass = 0.511;
        electron.massPower = 6;
        electron.charge = new Fraction(-3, 3);
        electron.spin = new Fraction(1, 2);

        this.existingParticles.push(electron);
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
