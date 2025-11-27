// this operator

const user = {
    username : "Nandini",
    age : 25,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website.`)
        console.log(this)
      } 
}

console.log(this)
console.log(user.welcomeMessage())



// arrow function

const arrowFunction = () => {
    console.log("This is an arrow function")
    console.log(this)
}

arrowFunction()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(4,5))


// implicite return
const mulTwo = (num1, num2) => num1 * num2
const subTwo = (num1, num2) => (num1 - num2)
console.log(mulTwo(4,5))
console.log(subTwo(10,4))

// return implicite object
const returnObject = () => ({email : "someone@gmail.com", password : "U89X4hjd00"})
console.log(returnObject())