
// ["","",""]
// [{} , {}, {}]


// forof loop (to access each value(key:value) from array, string, map)
numbers = [12,45,78,96,23,45,23]
for (const num of numbers){
    console.log(num)
}

const welcome = "Welcome to kurukshetra"
for (const greet of welcome ){
    console.log(greet)
}


const mapExample = new Map()
mapExample.set('In' ,'India')
mapExample.set('USA' ,'United States of America')
mapExample.set('Fr' ,'France')
mapExample.set('Ch' ,'China')

// console.log(mapExample)

for (const [key , value] of mapExample){
    console.log(`${key} : ${value}`)
}


// forin loop for object , array , string (return index, key)
const user = {
    name : "nandini",
    age : 25,
    location : "ambala"
}

for (const key in user){
    console.log(`${key} : ${user[key]}`)
}

// foreach loop for object inside array

const colors = ['red','orange','blue','pink']
colors.forEach(function (color) {
    console.log(color)
})

// arrow functiom
const animals = ['lion','tiger','cat','cow','dog']
animals.forEach( (animal) => {
    console.log(animal)
})


// printme function

const item =[10,20,30,50]
function printme(item){
    console.log(item)
}

item.forEach(printme)


// usecase

const roommates = ['nandu','annu', 'chutki']
roommates.forEach( (roomie , index , arr) => {
    console.log(roomie , index , arr)
})

const coding = [
    {
        language : 'javaScript',
        extension : 'js'
    },
     {
        language : 'python',
        extension : 'py'
    },
     {
        language : 'java',
        extension : 'java'
    },
     {
        language : 'c++',
        extension : 'cpp'
    }
]

coding.forEach( (item) => {
    console.log(`Extension of ${item.language} is ${item.extension}`)
})