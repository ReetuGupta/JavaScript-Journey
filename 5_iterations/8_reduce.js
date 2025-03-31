const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);



/*****************************Impotant *******************/
// filter() → Returns a filtered array based on a condition
// Used for: Selecting elements that match a condition.

// Returns: A new array with only elements that satisfy the condition.

// Does not modify the original array.



// map() → Transforms each element & returns a new array
// Used for: Modifying each element in an array.

// Returns: A new array with transformed elements.

// Does not modify the original array.




// reduce() → Reduces an array to a single value
// Used for: Summing up values, finding maximum/minimum, etc.

// Returns: A single result.

// Requires an initial value (optional, default is first element).
