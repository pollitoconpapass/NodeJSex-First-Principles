const http = require('http')
const {createReadStream} = require('fs')


const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./data/bigbiggie.txt', {
        encoding: 'utf-8'
    })
    
    fileStream.on('data', (chunk) => {
        fileStream.pipe(res)
    })

    fileStream.on('error', (error) => {
        console.log("An error occured: ", error)
    })
})

server.listen(8080)
console.log("Server running in port 8080...")