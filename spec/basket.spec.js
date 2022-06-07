const Checkout = require('../src/basket.js')

describe('Bagel Shop', () => {
  it('- add an item to basket', () => {
    // set up
    const basket = new Checkout()
    const itemToAdd = {
      name: 'Bagel',
      price: 7.99,
      variant: 'Vegi Supreme',
      quantity: 1
    }
    // expect the result of calling addToBasket(itemToAdd) to be an array containing itemToAdd
    const expectedResult = [itemToAdd]
    // execute
    const result = basket.addToBasket(itemToAdd)
    // verify
    expect(result).toEqual(expectedResult)
  })
  it('remove an item from the basket', () => {
    const basket = new Checkout()

    const itemsToAdd = [
      {
        name: 'Bagel',
        price: 7.99,
        variant: 'Vegi Supreme',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 8.99,
        variant: 'NYC Deli',
        quantity: 1
      }
    ]

    const itemToRemove = {
      name: 'Bagel',
      price: 7.99,
      variant: 'Vegi Supreme',
      quantity: 1
    }

    const expectedResult = [
      {
        name: 'Bagel',
        price: 8.99,
        variant: 'NYC Deli',
        quantity: 1
      }
    ]
    // execute
    basket.addMultipleToBasket(itemsToAdd)
    const updatedBasket = basket.removeFromBasket(itemToRemove)
    // console.log('new basket', updatedBasket)

    // verify
    expect(updatedBasket).toEqual(expectedResult)
  })

  it('add basket limit of 5', () => {
    const basket = new Checkout()
    const itemsToAdd = [
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYA Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYB Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYC Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYD Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYE Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYF Deli',
        quantity: 1
      }
    ]
    const expectedResult = [
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYA Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYB Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYC Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYD Deli',
        quantity: 1
      },
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYE Deli',
        quantity: 1
      }
    ]
    // execute
    const result = basket.addMultipleToBasket(itemsToAdd)
    // verify
    expect(result).toEqual(expectedResult)
  })
  it('basket is full, use bigger basket', () => {
    // set up
    const basket = new Checkout()
    const itemsToAdd = [
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYA Deli',
        quantity: 2
      },
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYB Deli',
        quantity: 3
      },
      {
        name: 'Bagel',
        price: 6.99,
        variant: 'NYC Deli',
        quantity: 5
      }
    ]
    // execute
    basket.addMultipleToBasket(itemsToAdd)
    const totalRoom = basket.isMax(this.max)
    // verify
    expect(totalRoom).toEqual(100)
  })
})
