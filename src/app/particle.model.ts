import { Fraction } from 'app/shared/fraction';

export class Particle {
    name: string;
    mass: number;
    massPower: number;
    charge: Fraction = new Fraction();
    spin: Fraction = new Fraction();
}
