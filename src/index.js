let http = require('http')
const port = 1234
const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Response from NodeJs");
        const ipAddress = req.socket.remoteAddress;
        console.log(`Request from ${ipAddress}`);
        res.write(`Your IP address is ${ipAddress}\n`);
        res.write(`Request's URL: ${req.url}\n`);
        res.write(`Detail request: ${JSON.stringify(require('url').parse(req.url, true))}`)
        res.end();
    }
).listen(port);
console.log(`Server is running on port ${port}`)
// console.log(`test nodemon`)