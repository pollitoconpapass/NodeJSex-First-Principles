// === NODE FS (FileService) MODULE METHODS === 
const fs = require('fs')

let first_txt = fs.readFileSync('./data/first.txt', 'utf8')  // -> read the file and convert to string
let second_txt = fs.readFileSync('./data/second.txt', 'utf8')

console.log(first_txt)
console.log(second_txt)

const title = "This is the third file Title"
const more_text = "This is the third file more text"

fs.writeFileSync("./data/third.txt", title)  // -> write the file 

fs.writeFileSync('./data/third.txt', more_text, {  // -> write the file with a flag for appending text to a file
    flag: 'a'
})  