// NOUNS -> PROPETIES DATA
// VERBS ACTIONS -> METHODS FUNCTIONS

class Basket
- properties(what do i store)

-methods (actions/functions)
    -addItem(property) 
## 1.1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

method              || inputs           || scenario         || outputs
addToBasket(item)      item@object          push item           basket + item
## 1.2
As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

method                  || inputs           || scenario         || outputs
removeFromBasket(item)     item@object          pull item           basket - item
checkItemToRemove           ID@number           check ID            item ID = 
