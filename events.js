const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data, secondData) => {
    console.log("Recieved the data")    
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('response', 34, 'Ryan is a good boy')
