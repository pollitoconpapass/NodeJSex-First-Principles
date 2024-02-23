// === ASYNCHRONOUS FILE READING WITH fs ===

const fs = require('fs')

fs.readFile('./data/first.txt', function(error, data){
    if (error) {console.log(error)}
    console.log(data.toString())

    fs.readFile('./data/second.txt', function(error, data){
        if (error) {console.log(error)}
        console.log(data.toString())

        fs.writeFile('./data/newFIle.txt', 'Archived', function(error, data){
            console.log(error)
            console.log(data)
        })
    })
})

