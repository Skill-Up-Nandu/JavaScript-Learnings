// ^ 
console.log(`\n********* ^ **********`)
console.log(/^world/.test("Hello world"))
console.log(/^hello/i.test("Hello world"))

// $
console.log(`\n********* $ **********`)
console.log(/world$/.test("Hello world"))
console.log(/hello$/i.test("Hello world"))

// \b
console.log(`\n********* \b **********`)
const wordBoundary = "Hello look at me!"
console.log(wordBoundary.search(/\blo/i))  //word should begin with lo
console.log(wordBoundary.search(/lo\b/i))  // word should end with lo
console.log(wordBoundary.search(/\blo\b/i))  // lo is exact word

// \B  !(\b)
console.log(`\n********* \B **********`)
console.log(wordBoundary.search(/\Blo/i)) // word should end with lo
console.log(wordBoundary.search(/lo\B/i)) //word should begin with lo

// (?=...)
console.log(`\n********* (?=..) **********`)
console.log(/a(?=i)/.test("naina"))
console.log(/n(?=i)/.test("naina"))
console.log(/e(?=a)/.test("neeraj"))

//  (?!=...)
console.log(`\n********* (?!=..) **********`)
console.log(/a(?!i)/.test("nainai"))
console.log(/n(?!i)/.test("naina"))
console.log(/e(?!a)/.test("neeraj"))

//  (?<=...)
console.log(`\n********* (?<=..) **********`)
console.log(/(?<=a)i/.test("naina"))
console.log(/(?<=a)n/.test("naina"))

//  (?!<...)
console.log(`\n********* (?<!..) **********`)
console.log(/(?<!a)i/.test("nainai"))
console.log(/(?<!a)n/.test("naina"))