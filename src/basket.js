class Checkout {
  constructor() {
    this.basket = []
  }

  addToBasket(item) {
    if (!item) {
      return null
    }
    this.basket.push(item)
    return item
  }
}

module.exports = Checkout
