export class Fraction {
  public numerator: number = 0;
  public denominator: number = 1;

  constructor(numerator?: number, denominator?: number, fraction?: Fraction) {
    if (numerator !== undefined) {
      this.numerator = numerator;
      this.denominator = denominator;
    }

    if (fraction !== undefined) {
      Object.assign(this, fraction);
    }
  }

  toString() {
    if (this.denominator === 1) {
      return this.numerator;
    } else {
      return this.numerator + '/' + this.denominator;
    }
  }

  public decrement() {
    this.numerator--;
  }

  public increment() {
    this.numerator++;
  }

  public equals(fraction: Fraction): boolean {
    return this.numerator === fraction.numerator && this.denominator === fraction.denominator;
  }
}
