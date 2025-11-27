// const instaUser = new Object()
// console.log(instaUser)

const facebookUser = {}
facebookUser.name = "Nandini"
facebookUser.email = "nandu@gmail.com"
facebookUser.isLoggedIn = false
// console.log(facebookUser)

// nested object
const regularUser = [
    {
        fullName : {
            fname : "Nandu",
            lname : "Puranchand"
        }
    },
    {
        Dob : {
            day : 20,
            month : "feb",
            year : 2001
        }
    }
]

// console.log(regularUser[1].Dob.year)


// combine two or more object  (keys should be different in each array object)

const anamika = {
    course : "MCA",
    cgpa : 9,
    grade : "Excellent"
}
const nidhi = {
    courseN : "MSC",
    cgpaN : 8,
    gradeN : "Very Good"
}

const both = {anamika , nidhi}
console.log(both)

const mergedObject = Object.assign({} ,nidhi,anamika)
console.log(mergedObject)

const mergedObj = {...nidhi, ...anamika}
console.log(mergedObj)

// fetch keys and values

console.log(Object.keys(facebookUser))
console.log(Object.values(facebookUser))
console.log(Object.entries(facebookUser))

// check weather it is a property or not
console.log(facebookUser.hasOwnProperty("email"))
console.log(facebookUser.hasOwnProperty("emailAddress"))