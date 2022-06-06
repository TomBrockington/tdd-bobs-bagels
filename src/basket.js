class Checkout {
  constructor() {
    this.basket = []
  }

  // addToBasket(item) {
  //   if (!item) {
  //     return null
  //   }
  //   this.basket.push(item)
  //   return item
  // }

  addToBasket(item) {
    if (item) {
      this.basket.push(item)
    }
    return this.basket
  }

  addMultipleToBasket(items) {
    for (let i = 0; i < items.length; i++) {
      this.addToBasket(items[i])
    }
    return this.basket
  }

  // removeItems(item) {
  //   console.log('contetns before ', this.basket)
  //   for (let i = 0; i < this.basket.length; i++) {
  //     if (item.sku === this.basket[i].sku) {
  //       delete this.basket[i]
  //     }
  //   }
  //   console.log('contents after ', this.basket)
  //   return this.basket
  // }

  removeFromBasket(item) {
    // check if there any items basket, then remove the last one from the array
    // console.log('Basket Contents before', this.basket)
    const newBasket = []
    for (let i = 0; i < this.basket.length; i++) {
      if (item.variant !== this.basket[i].variant) {
        newBasket.push(this.basket[i])
      }
    }
    // console.log('Basket Contents after', this.basket)
    this.basket = newBasket
    return this.basket
  }
}

module.exports = Checkout
