const Checkout = require('../src/basket.js')

describe('Bagel Shop', () => {
  // it('- add an item to basket', () => {
  //   // set up
  //   const basket = new Checkout()
  //   const itemToAdd = {
  //     name: 'Bagel',
  //     price: 9.99
  //   }
  //   // execute
  //   const result = basket.addToBasket(itemToAdd)
  //   // verify
  //   expect(result).toEqual(itemToAdd)
  // })
  it('- add an item to basket', () => {
    // set up
    const basket = new Checkout()
    const itemToAdd = {
      name: 'Bagel',
      price: 9.99
    }
    // expect the result of calling addToBasket(itemToAdd) to be an array containing itemToAdd
    const expectedResult = [itemToAdd] 
    // execute
    const result = basket.addToBasket(itemToAdd)
    // verify
    expect(result).toEqual(expectedResult)
  })

  it('- remove item from basket', () => {
    // set up
    const basket = new Checkout()
    const startBasket = [
      {
        sku: 'BGLO',
        price: '0.49'
      },
      {
        sku: 'BGLP',
        price: '0.39'
      }
    ]
    const toRemove = {
      sku: 'BGLP',
      price: '0.39'
    }
    const expected = [
      {
        sku: 'BGLO',
        price: '0.49'
      },
      undefined
    ]
    // execute
    basket.addMultipleItems(startBasket)
    const result = basket.removeItems(toRemove)
    // verify
    expect(result).toEqual(expected)
  })
})
