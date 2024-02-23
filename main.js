// const {myNumber, myWebAddress} = require('./module/myModule');  // -> require will import the variables
// console.log("Hello, my number is " + myNumber + " and my web address is " + myWebAddress)

const math = require("./math/math")
//console.log(math)

console.log(math.add(2, 3))

// if it gives error: Got to math.js and decomment the module.exports....
// ... or change line 4 for: import math from "./math/math.js"
