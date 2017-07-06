export class Fraction {
  private numerator: number;
  private denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  toString() {
    if (this.denominator === 1) {
      return this.numerator;
    } else {
      return this.numerator + '/' + this.denominator;
    }
  }
}
