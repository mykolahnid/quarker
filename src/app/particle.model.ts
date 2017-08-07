import { Fraction } from 'app/shared/fraction';

export class Particle {
    name: string;
    mass: number;
    massPower: number;
    charge: Fraction = new Fraction();
    spin: Fraction = new Fraction();

    constructor(particle?: Particle) {
        if (particle) {
            Object.assign(this, particle);
            this.charge = new Fraction(0, 0, particle.charge);
            this.spin = new Fraction(0, 0, particle.spin);
        }
    }

    public equals(particle: Particle): boolean {
        console.log('equals check');
        console.log(this);
        console.log(particle);
        return this.charge.equals(particle.charge) && this.spin.equals(particle.spin);
    }
}
