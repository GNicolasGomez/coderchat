import express from 'express';
import {Server} from 'socket.io';
import __dirname from './utils.js';

const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=> console.log(`Linstening on port ${PORT}`));

const io = new Server(server);
app.use(express.static(__dirname+'/public'));
let log=[];

io.on('connection',socket=> {
    socket.on('message',data=> {
        // console.log(data);
        log.push(data);
        io.emit('log',log);
    })
})

// app.use(express.static('src/public'));
// let messagelog=[];
// io.on('connection',socket=> {
//     // console.log("Socket Conectado a mi servidor");
//     socket.emit('log',messagelog);
//     socket.on('keyboard',data=>{
//         messagelog.push({client:socket.id,message:data});
//     })
//     socket.emit('log',messagelog);
// })