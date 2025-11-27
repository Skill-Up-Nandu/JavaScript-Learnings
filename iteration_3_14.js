// reduce method

const numbers = [1,2,3]
// named function
const total = numbers.reduce( function(acc , currval) {
    console.log( `${acc} + ${currval} `)
    return acc + currval
},0)

console.log(total)


// arrow fucntion
initialval = 0
const arrowTotal = numbers.reduce( (acc , currval) => (acc + currval ), initialval)
console.log(arrowTotal)

// usecase

const shoppingCart = [
    {
        item : "java course",
        price : 999
    },
    {
        item : "Python course",
        price : 1999
    },
    {
        item : "data analytics",
        price : 5999
    },
    {
        item : "java script",
        price : 3999
    }
]


const totalAmount = shoppingCart.reduce( (acc ,item) => ( acc + item.price),0)
console.log(totalAmount)