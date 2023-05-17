import server from "./app.js"
import { Server } from "socket.io"

let PORT = 8080
let ready= ()=>console.log("server ready on port: "+PORT)

let http_server = server.listen(PORT,ready)
let socket_server = new Server (http_server)

let contador = 0;
const chats = [];
socket_server.on(
    "connection",
    socket => {
        console.log(`client ${socket.client.id} connected`)
        socket.on(
            'primer_conexion',
            data=>{
                console.log(data.name)
                contador++
                socket_server.emit(
                    'contador',
                    {contador}
                )
            }
        )
        socket.on("auth", () => {
            //socket solo para cada cliente
            socket_server.emit("allMessagess", chats);
          });
          socket.on("new_message", (data) => {
            chats.push(data);
            console.log(chats);
            socket_server.emit("allMessagess", chats);
          });
    }
)
    