// console.log(Math)

// console.log((Math.floor(Math.random()*10))+1)

//  random from 10 - 50
const max = 50
const min = 20

// console.log(Math.floor((Math.random()*(max-min+1))+min))


let arrVal = [10,20,30,40,5,6,8,9,8]
let arr = new Array(45,78,96,35,25,36,15,22)

// packed array
console.log(arrVal)
console.log(arr)

// spread array
console.log(...arrVal)
console.log(...arr)

let maxVal = Math.max(...arr)
console.log(`Maximum value from ${arr} is ${maxVal}`)

let minVal = Math.min(...arrVal)
console.log(`Minimum value from ${arrVal} is ${minVal}`)
