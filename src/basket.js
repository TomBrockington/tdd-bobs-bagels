class Checkout {
  constructor() {
    this.basket = []
    this.max = 5
  }

  isMax() {
    if (this.basket.length >= this.max) {
      return true
    }
    return false
  }

  addToBasket(item) {
    if (!this.isMax()) {
      if (item) {
        console.log('Added Item ', item, this.basket.length)
        this.basket.push(item)
      }
    }
    return this.basket
  }

  addMultipleToBasket(items) {
    for (let i = 0; i < items.length; i++) {
      this.addToBasket(items[i])
    }
    return this.basket
  }

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

console.log('is max q', this.quantity)

module.exports = Checkout
