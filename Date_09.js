const myDate = new Date()
console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())

const myCreatedDate = new Date(2001,1,20,15,15)
console.log(myCreatedDate.toLocaleString())


// time comparison (miliseconds)

const myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

// miliseconds to seconds

console.log(Math.floor(myTimeStamp/1000))
console.log(myCreatedDate.getTime()/1000)

// locale/string formatting

const newDate = new Date()
console.log(newDate.toLocaleString('default' ,{month : "long", day:"2-digit",year:"2-digit"} ))