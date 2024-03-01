export class Price {
  private constructor(
    public readonly value: number
  ) { }

  static from(value: number): Price {
    if (value < 0) throw new Error('Price must be greater than or equal to 0');
    const roundedToTwoDecimals = Math.round(value * 100) / 100;
    return new Price(roundedToTwoDecimals);
  }

}

export class ShoppingCart {
  private prices: Price[] = []

  public add(price: Price) {
    this.prices.push(price);
  }

  public calculateTotalPrice(): Price {
    return this.prices.reduce((total, price) => {
      return Price.from(total.value + price.value);
    }, Price.from(0));
  }

  public hasDiscount(): boolean {
    const applicableDiscount = Price.from(100);

    return this.calculateTotalPrice().value >= applicableDiscount.value;
  }

  public numberOfProducts(): number {
    return this.prices.length;
  }
}