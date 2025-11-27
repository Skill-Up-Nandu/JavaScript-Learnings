function logginAccess (){
    console.log("Logged in successfully!")
}

logginAccess()

function sum(num1, num2){
    return `the sum is ${num1+num2}`
}

console.log(sum(20,50))

function addNumbers(num1 , num2){
    const result = num1+num2
    return result
}

const result = addNumbers(10,20)
console.log(`the result : ${result}`)


// rest operator 
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(10,20,30,40,50,60,70))

function calculateCartPriceUsingRest(...num1){
    return num1
}
console.log(calculateCartPriceUsingRest(10,20,30,40,50,60,70))

function calculateCartPriceUsingRestAnother(val1, val2, val3,...num1){
    return num1
}
console.log(calculateCartPriceUsingRestAnother(10,20,30,40,50,60,70))


// passing object as an argument in fucntiom

const user = {
    username : "nandu",
    course : "BCA"
}

const anotheruser = {
    username : "nidhi",
    course : "BSc"
}
function handleObject(anyObject){
    console.log(`I'm ${anyObject.username} and i have done ${anyObject.course}`)
}

handleObject(user)
handleObject(anotheruser)
handleObject({
    username : "Anamika",
    course : "PHD"
})


// passing array as an argument

const priceList = [100,500,400,60,700]

function returnPricefromArray(getArray){
    return `The prices are : ${getArray}`
}

console.log(returnPricefromArray(priceList))
console.log(returnPricefromArray([11,22,33,44,55,66,77,88,99]))

function returnIndexedArray(getArray){
    return `The Actual price is ${getArray[2]}`
}

console.log(returnIndexedArray(priceList))