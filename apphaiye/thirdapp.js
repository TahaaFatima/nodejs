const http  = require('http');
const {one, two} = require('./themodule.js'); // Destructing the module

const server = http.createServer( (req, res) => {
    console.log(one(3, 2));
    console.log(two(3, 2));
});

server.listen(3000);