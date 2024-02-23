const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    
    if (req.url == '/'){
        res.write('Welcome to the Server!!')
        return res.end()
    }
    else if (req.url == '/about'){
        // Heavy task -> Blocking Code
        for(let i = 0; i < 100000; i++){
            console.log(Math.random() * i)
        }
        return res.end("What's up?")
    }
    else {
        return res.end("404 Not Found CTV")
    }
})

// Initialize the server:
server.listen(8080)
console.log("Server running in port 8080...")