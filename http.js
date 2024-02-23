// ==== HTTP METHOD ====
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)

    if (req.url == '/'){
        res.write('Welcome to the Server!!')
        return res.end()
    }

    if (req.url == '/about'){
        res.write('Its about the about page')
        return res.end()
    }

    res.write(`
        <h1>404 NOT FOUND</h1>
        <p>The page you are looking for does not exist</p>
    `)
    res.end()
})

server.listen(8080)

console.log('Server running at: http://127.0.0.1:8080')