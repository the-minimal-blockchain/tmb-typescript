import { ClientRequest } from 'http'
import * as net from 'net'

function Server() {
    net.createServer(socket => {
        console.log('client connected')
    }).listen(1337)
}

function Client() {
    const req = new ClientRequest('http://localhost:1337')
    req.end()
}

Server()
Client()
