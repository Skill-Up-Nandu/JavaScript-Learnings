// premitive data type ( stack) (copy od data passed)

console.log('example : stack')
const firstName = 'Nandini'
let accountName = firstName
accountName = "Nandini puranchand"
console.log(firstName)
console.log(accountName)

// referenced data type (heap) call ny value

console.log('example : heap')
let userOne = {
    email : 'user@google.in',
    upi : 'user@ybl'
}

let userTwo = userOne
userTwo.upi = 'user@oki'

console.log(userOne.upi)
console.log(userTwo.upi)
