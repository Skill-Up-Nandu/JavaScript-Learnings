// ********************************* F L A G S **************************************

// global g
console.log('\n****** Global ******')
const regexGlobal = /very/g
const text = "Hi im nandu a very very ambitious and very consistent woman."
// console.log(text.replaceAll('very', "VERY"))
console.log(text.replace(regexGlobal , "VERY"))


// case-insensitive i
console.log('\n****** caseInsentive ******')
const caseRegExp = /hello/ig
const caseText = "Hello hello HELLO hELLO"
const resultMatch = caseText.match(caseRegExp)
console.log(resultMatch)

// Multilne m  (check in each line)

// prequisites ^ , $  , \b
// ^ : check starting of string (leftmost word) 
// $ : check end of string (rightmost word)
// \b : check for the word with its own boundaries (exact sequence)
console.log('\n****** Multiline ******')
const multilineRegE1 = /^world/ 
const multilineRegE2 = /hello$/i
const multilineRegE3 =/^hello/i
const multilineText = "Hello World"
console.log(multilineRegE1.test(multilineText))
console.log(multilineRegE2.test(multilineText))
console.log(multilineRegE3.test(multilineText))


const multilineText2 ="banana\nmango\napple"
const multilineRegE4 =/^man/
const multilineRegE5 =/^man/m
console.log(multilineRegE4.test(multilineText2))
console.log(multilineRegE5.test(multilineText2))

const multilineRegE6 =/\bman\b/m
console.log(multilineRegE6.test(multilineText2))


// s DotAll
// prequisites
// . (dot operator)
// * for all characters
console.log('\n****** DotAll ******')
const dotRegx  =/n.*i/i
const dottext = 'My name is Nandini Puranchand'
console.log(dotRegx.test(dottext))

const dotText = 'My name was Nan\ndin Puranchand'
console.log(dotRegx.test(dotText))

const dotRegx2 = /n.*i/si
console.log(dotRegx2.test(dotText))


// y (sticky match)
console.log(`\n********* Sticky **********`)
const stickyText = 'Hello hello hello whello'
const stickyRegex = /hello/
console.log('global flag')
console.log(stickyRegex.exec(stickyText))
console.log(stickyRegex.exec(stickyText))
console.log(stickyRegex.exec(stickyText))
console.log(stickyRegex.exec(stickyText))

const stickyRegex2 = /hello/iy
console.log('sticky flag')

console.log(stickyRegex2.exec(stickyText))
stickyRegex2.lastIndex = 6
console.log(stickyRegex2.exec(stickyText))

