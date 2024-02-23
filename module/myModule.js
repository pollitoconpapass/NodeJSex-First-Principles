//console.log(module)

const myWebAddress = "nodejs.org"
const myNumber = 23
const user = {
    name: "Jhon",
    lastname: "Doe"
}

// For making it so we can use it on different files... 
//          like (from api import API) on Python
module.exports = {
    myWebAddress,
    myNumber,
    user
}
