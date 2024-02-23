// === NODE OS MODULE METHODS === 
const os = require('os')
let userinfo = os.userInfo()

console.log(userinfo)
console.log(os.uptime())
// console.log(os.platform())
// console.log(os.totalmem())
// console.log(os.freemem())

console.table({
    os: os.platform(),
    version: os.release(),
    totalmemory: os.totalmem(),
    freememory: os.freemem()
})
