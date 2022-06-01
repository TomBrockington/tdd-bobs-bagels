const Checkout = require('../src/basket.js')

describe('Bagel Shop', () => {
  it('- add an item to basket', () => {
    // set up
    const basket = new Checkout()
    const itemToAdd = {
      name: 'Bagel',
      price: 9.99
    }
    // execute
    const result = basket.addToBasket(itemToAdd)
    // verify
    expect(result).toEqual(itemToAdd)
  })
})
