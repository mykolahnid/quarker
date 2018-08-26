import { Fraction } from 'app/shared/fraction';

export class Particle {
  name: string;
  mass: number;
  massPower: number;
  year: number;
  charge: Fraction = new Fraction();
  spin: Fraction = new Fraction();
  col: number;
  row: number;

  constructor(particle?: Particle) {
    if (particle) {
      Object.assign(this, particle);
      this.charge = new Fraction(0, 0, particle.charge);
      this.spin = new Fraction(0, 0, particle.spin);
    } else {
      this.charge = new Fraction(0, 3);
      this.spin = new Fraction(0, 2);
    }
  }

  public equals(particle: Particle): boolean {
    console.log('equals check');
    console.log(this);
    console.log(particle);
    // tslint:disable-next-line:max-line-length
    return this.charge.equals(particle.charge) && this.spin.equals(particle.spin) && this.year === particle.year && this.mass === particle.mass;
  }
}
