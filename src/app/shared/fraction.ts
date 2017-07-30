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

  public decrement() {
    this.numerator--;
  }

  increment() {
    this.numerator++;
  }

  public equals(fraction: Fraction): boolean {
    return this.numerator === fraction.numerator && this.denominator === fraction.denominator;
  }
}
