// to immideately execute any function  
// to get avoid by the global polution


// named iife
(function add(num1 , num2){
    console.log(num1 + num2)
})(12,12);


// unnamed iife
((language) => {
    console.log(`im an arrow function in ${language} language`)
})("javaScript")