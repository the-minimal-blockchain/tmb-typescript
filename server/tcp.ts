import * as net from 'net'

const PORT = 3000
const IP = '127.0.0.1'

function Server() {
    const server = net.createServer();
    server.on('connection', (socket: any) => {
        socket.write('Hello World!\n');
        socket.pipe(socket);
    });
    server.listen(PORT, IP);
}

Server()
