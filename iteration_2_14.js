// filter 

const numbs = [1,2,3,4,5,6,7,8,9,10]

const resultLoop = numbs.forEach( (item) => {
    console.log(item)
})

console.log(resultLoop)  // foreach never returns any value

// but filter does

const newNumbs = numbs.filter( (num) => num > 5)
console.log(newNumbs)


// map
const newMapNums = numbs.map( (num) => num +10 )
console.log(newMapNums)


// chaining
const newchaining = numbs.map( (num) => num * 10).map( (num) => num +2).filter( (num) => num > 50)
console.log(newchaining)