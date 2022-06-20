class Checkout {
  constructor(basketSize = 5) {
    this.basket = []
    this.max = basketSize
  }

  isMax(quantity) {
    if (this.getTotal() + quantity > this.max) {
      // console.log('get a bigger basket ')
      // this.max = 100
      // console.log('new trolly size = ', this.max)
      // return this.max
      return true
    } else {
      // console.log('basket is big enough')
      return false
    }
  }

  getTotal() {
    let totalQuantity = 0
    for (let i = 0; i < this.basket.length; i++) {
      totalQuantity += this.basket[i].quantity
    }
    return totalQuantity
  }

  addToBasket(item) {
    if (!this.isMax(item.quantity)) {
      if (item) {
        this.basket.push(item)
        // console.log('Added Item ', item, this.basket.length)
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

module.exports = Checkout
