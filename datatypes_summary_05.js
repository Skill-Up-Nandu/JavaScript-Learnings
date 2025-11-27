// On the baisi of how data will store and access in memory ,  data types are divided into two categories

// 1. premitive : int , string ,  boolean , undefined , null , symbol , bigInt


const number = 5623
const name = "Nandini"
const outsiedTeamp = null

const isGradauted = true
let cgpa
const feesPending = 0
const bigInt = 7984651321324676513546513n

console.log("1.")
console.table([number , name , outsiedTeamp, isGradauted , cgpa , feesPending , bigInt ])

//  to represent unique values 
// const userId = '123'
console.log("2.")
const userId = Symbol('123')
const userRoll = Symbol('123')
console.log("3.")
console.log(userRoll == userId)



// reference (non premitive)

const heros = ['Marvel' , 'PowerRangers' , 'Avengers']

let userDtaild = {
    candidateName : 'Neeraj' ,
    age: 24 ,
    Job: 'Placed' , 
    Salary: 24000
}

let myFunction = function(){
    console.log('im in function')
}
    
console.log("4.")
console.log(myFunction())
console.log("5.")
console.log(typeof myFunction)