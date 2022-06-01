# info 

building basket features

## Part 1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

domain model 
method          || inputs           || scenario         || outputs





user stories - into domain model 
class should be basket

1. creae basket class 

## nings 
const findSameItem = this.basket.find(item => item.SKU === itemToAdd.SKU)
            if (findSameItem) {
                findSameItem.quantity += itemToAdd.quantity
                this.basketQuantity += itemToAdd.quantity
                return this.basket
            }
            const findInInventory = this.inventory.find(item => item.SKU === itemToAdd.SKU)
            findInInventory.quantity = itemToAdd.quantity
            this.basket.push(findInInventory)
            this.basketQuantity += findInInventory.quantity
            return this.basket