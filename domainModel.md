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

## 2.1 
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

method                  || inputs           || scenario         || outputs
checkQuantity               basket array        if over 10          add item    
                                                dont add            dont add item

if basket array > 10 - dont allow more to go in 
if less than add to basket
if basket full return messgae ''you are full' 

add a quantity to constructor
in add bagels functions. include a ++
in remove bagels include a --


