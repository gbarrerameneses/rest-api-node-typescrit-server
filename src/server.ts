import express from 'express'
import router from './router'
import db from './config/db'

// Conectar a base de datos

async function connectDB() {
    try {
        await db.authenticate()
        db.sync() // en caso de agregar nuevos modelos, nuevas columnas va ir agregandolos
        console.log('Conexión exitosa a la BD');
    } catch (error) {
        console.log(error);
        console.log('Hubo un error al conectar a la BD');
    }
}

connectDB()

const server = express()

server.use('/api/products', router) // método que engloba todos los metodos http, así ejecuta cada verbo

// Routing
// server.get('/', (req, res) =>{
    // const datos = [
    //     { id: 1, nombre: 'Juan' },
    //     { id: 2, nombre: 'Pablo' }
    // ]
    // res.send('Hola mundo en Express') - prueba que está funcionando # se puede enviar datos a pantalla con send o json
// })




export default server