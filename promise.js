const {readFile} = require('fs/promises')
//const {promisify} = require('util')

// Promisify:
//const readFilePromise = promisify(readFile)  // -> replace what is beneath...   

// const get_text = (path) =>{
//     return new Promise(function(resolve, reject){
//         readFile(path, 'utf8', (error, data) => {
//             if (error) reject(error)
//             resolve(data) 
//         })
//     })
// }


// get_text("./data/third.txt")
//     .then((result) => console.log(result))
//     .then(() => get_text("./data/first.txt"))
//     .then(result => console.log(result))
//     .catch((error) => console.log(error))

async function read(){
    try {
        //throw new Error("Something went wrong...")
        const result = await readFile("./data/third.txt", "utf-8")
        const result2 = await readFile("./data/first.txt", "utf-8")
        console.log(result)
        console.log(result2)
    } catch(error) {
        console.log(error)
    }
}

read()