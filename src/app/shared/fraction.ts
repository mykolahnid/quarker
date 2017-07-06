export class Fraction {
  private numerator: number = 0;
  private denominator: number = 1;

  constructor(numerator?: number, denominator?: number) {
    if (numerator !== undefined) {
      this.numerator = numerator;
      this.denominator = denominator;
    }
  }

  toString() {
    if (this.denominator === 1) {
      return this.numerator;
    } else {
      return this.numerator + '/' + this.denominator;
    }
  }
}
