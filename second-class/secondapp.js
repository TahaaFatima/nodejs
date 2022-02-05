const http = require('http');
const log  = require('./localmodule.js');
const mera_module = require('./meramodule.js');

const server = http.createServer( (req, res) => {
    /* console.log(http.METHODS);
    console.log(http.STATUS_CODES);
    console.log(http.Agent); */

    log.info('Ye info hai');

    mera_module.changepackage();
});

server.listen(3000); 