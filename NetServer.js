// const NetServer = require('net').Server;
// class SocketServer extends NetServer {
//     constructor() {
//         super();
//         this.listen('8080');
//         this.on('connection', this.connectionHandler);
//     }
//     connectionHandler(socketParam) {
//         console.log('someone connected!');
//         this.socket = socketParam;
//         this.repeater();
//     }
//     repeater() {
//         let counter = 0;
//         setInterval(() => {
//             this.socket.write(`hello:${counter++}`);
//         }, 3000);
//     }
// }
// module.exports = new SocketServer();


//שאלה 25
// const NetServer = require('net').Server;
// class SocketServer extends NetServer {
//     constructor() {
//         super();
//         this.listen('8080');
//         this.on('connection', this.connectionHandler);
//     }
//     connectionHandler(socketParam) {
//         console.log('someone connected!');
//         this.socket = socketParam;
//         this.repeater();
//     }
//     repeater() {
//         let counter = 1;
//         setInterval(() => {
//             this.socket.write(`hello:${counter*=2}`);
//         }, 4000);
//     }
// }
// module.exports = new SocketServer();


//שאלה 26

// const NetServer = require('net').Server;
// class SocketServer extends NetServer {
//     constructor() {
//         super();
//         this.listen('8080');
//         this.on('connection', this.connectionHandler);
//     }
//     connectionHandler(socketParam) {
//         console.log('someone connected!');
//         this.socket = socketParam;
//         this.repeater();
//     }
//     repeater() {
        
//         setInterval(() => {
//             let timeNow = new Date();
//             this.socket.write(timeNow);
//         }, 1000);
//     }
// }
// module.exports = new SocketServer();


