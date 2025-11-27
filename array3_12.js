const course = {
    courseName : "JavaScript",
    price : 999,
    courseInstructor : "Dr. Monika"
}

// destructconstruct any object value

const {courseInstructor : coach} = course
const {price} = course   

console.log(coach)
console.log(price)