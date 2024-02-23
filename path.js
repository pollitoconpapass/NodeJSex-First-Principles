// === NODE PATH MODULE METHODS === 
const path = require('path')

let file_path = path.join('/public', 'images', 'logo.png')

console.log(file_path)
console.log(path.basename(file_path))  // -> returns the filename
console.log(path.dirname(file_path))  // -> returns the directory
console.log(path.parse(file_path))  // -> returns the directory and filename like object
console.log(path.resolve('dist'))  // -> returns the absolute path with the extra name you place