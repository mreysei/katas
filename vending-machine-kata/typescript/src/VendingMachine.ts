export enum Coin {
  Penny = 1,
  Nickel = 5,
  Dime = 10,
  Quarter = 25,
}

export class VendingMachine {
  private amount: number = 0;
  private validCoins: Coin[] = [Coin.Nickel, Coin.Dime, Coin.Quarter];

  constructor() {}

  insert(coin: Coin): void {
    if (this.validCoins.includes(coin)) {
      this.amount += coin;
    }
  }

  getDisplayText(): string {
    if (this.amount === 0) {
      return "INSERT COIN";
    }
    const amountToPrint = (this.amount / 100).toFixed(2);
    return `AMOUNT: $${amountToPrint}`;
  }
}
