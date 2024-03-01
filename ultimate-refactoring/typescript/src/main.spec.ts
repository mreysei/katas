import {ShoppingCart, Price} from './main';

describe('ShoppingCart', () => {
  it('count_number_of_products', () => {
    const shoppingCart = new ShoppingCart();

    shoppingCart.add(Price.from(10));

    expect(shoppingCart.numberOfProducts()).toBe(1);
  })

  it('calculate_total_price', () => {
    const shoppingCart = new ShoppingCart();

    shoppingCart.add(Price.from(10));
    shoppingCart.add(Price.from(5));

    expect(shoppingCart.calculateTotalPrice().value).toBe(15);
  })

  it('know_when_is_discount_applicable', () => {
    const shoppingCart = new ShoppingCart();

    shoppingCart.add(Price.from(100));

    expect(shoppingCart.hasDiscount()).toBeTruthy();
  })

  it('know_when_is_not_possible_to_apply_discount', () => {
    const shoppingCart = new ShoppingCart();

    shoppingCart.add(Price.from(99));

    expect(shoppingCart.hasDiscount()).toBeFalsy();
  })
})