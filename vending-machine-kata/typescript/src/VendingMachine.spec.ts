import { Coin, VendingMachine } from "./VendingMachine";

describe("Vending Machine", () => {
  it("should show default text in the display when no coins are inserted", () => {
    const vendingMachine = new VendingMachine();

    expect(vendingMachine.getDisplayText()).toEqual("INSERT COIN");
  });

  it("should show the amount in the display when different type of coins are inserted", () => {
    const vendingMachine = new VendingMachine();

    vendingMachine.insert(Coin.Nickel);
    vendingMachine.insert(Coin.Dime);
    vendingMachine.insert(Coin.Quarter);

    expect(vendingMachine.getDisplayText()).toEqual("AMOUNT: $0.40");
  });

  it("should remain the same display text when invalid coin is inserted", () => {
    const vendingMachine = new VendingMachine();

    vendingMachine.insert(Coin.Penny);

    expect(vendingMachine.getDisplayText()).toEqual("INSERT COIN");
  });
});
