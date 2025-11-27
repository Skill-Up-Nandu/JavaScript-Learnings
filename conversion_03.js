const userId = 302
const userSal = "52000"
const num = "123abc"
console.log(typeof userId)
console.log(typeof userSal)

// conversion
let convertedId = Number(userSal)
console.log(typeof convertedId)
console.log(convertedId)

// not a number
let newNum = Number(num)
console.log(typeof newNum)
console.log(newNum)

// nul
const numNUll = null
console.log(typeof numNUll)
console.log(numNUll)
// convert into number
let convertNull = Number(numNUll)
console.log(convertNull)


// undefined
let value
let newVal = Number(value)
console.log(typeof newVal)
console.log(newVal)