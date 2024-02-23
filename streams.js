// const {writeFile} = require("fs/promises")  // -> to avoid: fs.writeFile

// const createBigFile = async () => {
//     await writeFile("./data/bigbiggie.txt", 'Quien eres?'.repeat(10000))
// }

// createBigFile()


const {createReadStream} = require('fs')

let stream = createReadStream('./data/bigbiggie3.txt')
stream.on('data', (chunk) => {
    console.log(chunk.toString())
})

stream.on('end', () => {
    console.log("End of file")
})

stream.on('error', (error) => {
    console.log("An error occured: ", error)
})
