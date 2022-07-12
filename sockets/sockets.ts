import SocketIO, {Socket } from 'socket.io'
import socketIO from 'socket.io'
export const desconectar =  (cliente:Socket) => {
    cliente.on('disconnect', ()=>{
         console.log('Cliente desconectado');
    })
}
export const mensaje=(cliente:Socket, io: socketIO.Server)=>{
    cliente.on('mensaje', ( payload: { de: String, cuerpo: String})=>{
    console.log('Mensaje recibido', payload)
    io.emit('mensaje-nuevo', payload);
    })
}
export const configurarUsuario=(cliente:Socket, io: socketIO.Server)=>{
    cliente.on('configurar-usuario', ( payload: { nombre: String})=>{
    console.log('Bienvenido Usuario', payload.nombre)
    
    })
}