const NetServer = require('net').Server;
const fs = require('fs')
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);

class Server extends NetServer {
    constructor() {
        super();
        this.listen('8080');
        this.on('connection', this.connectionHandler);
    }
    requestHolder(request, response)

}

