import { Fraction } from 'app/shared/fraction';

export class Particle {
    name: string;
    mass: number;
    massPower: number;
    charge: Fraction = new Fraction();
    spin: Fraction = new Fraction();

    public equals(particle: Particle): boolean {
        return this.charge.equals(particle.charge) && this.spin.equals(particle.spin);
    }
}
