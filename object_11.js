// object creation
// 1. Singleton : involk via constructor ( Sysntax : Object.create())
// 2. Object Literal : (Syntax : const objectName = { key : value})


// use symbol as key  reference (line 53)

const symKey = Symbol("key1")

const jUser = {
    name : "nandini",
    [symKey] : "101",
    "Full name" : "nandini puranchand",
    age: 24,
    location : "Kurukshetra",
    email : "nandini@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","tuesday","saturday"]
}

// how to access
console.log(jUser.location)
console.log(jUser["location"])

// console.log(jUser.full name)
console.log(jUser["Full name"])

// modify values
jUser.age = 25
console.log(jUser.age)

// freez object
// Object.freeze(jUser)
jUser.age = 26
console.log(jUser)


// use symbol as key
console.log(jUser)
console.log(typeof jUser[symKey])


// fucntion inside object

jUser.greet = function(){
    console.log(`Hi , ${this["Full name"]}!`)
}

console.log(jUser)
console.log(jUser.greet)
console.log(jUser.greet())
