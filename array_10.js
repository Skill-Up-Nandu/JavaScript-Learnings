const myArr = [10,20,30,40,50,60,70,80,90,100]
const myNewArr = new Array(80,90,40,70,50)

// console.log(myArr.slice(2,5))
// console.log(myArr)
// console.log(myNewArr.splice(1,4,3))
// console.log(myNewArr)


// merge two or more array

// myArr.push(myNewArr) //nested element
// console.log(myArr)

const conacatedArray = myArr.concat(myNewArr);   // using concat , it returns new array
console.log(conacatedArray)

// spread method

const spreadArray = [...myArr , ...myNewArr]
console.log(spreadArray)

// handle nested loops

const anotherArray = [4,8,6,9,7,[8,4,5,6],8,[7,8,6,[8,4,1,2,[1,2,3]]]]
const usabaleAnotherArray = anotherArray.flat(Infinity)
console.log(usabaleAnotherArray)

// to check weather is it an array
console.log(Array.isArray("nandini","nidhi","anamika"))

// to convert string into array
console.log(Array.from("nandini"))
console.log(Array.of("nanidni","nidhi","anamika"))
console.log(Array.from({name:"nandini",age:"24",edu:"pg"})) //intresting (will learn later on)
