import express from 'express'
import colors from 'colors'
import router from './router.js'
import db from './config/db.js'

// Conectar a base de datos

async function connectDB() {
    try {
        await db.authenticate()
        db.sync() // en caso de agregar nuevos modelos, nuevas columnas va ir agregandolos
        console.log(colors.blue.bold('Conexión exitosa a la BD'));
    } catch (error) {
        console.log(error);
        console.log(colors.bgRed.white('Hubo un error al conectar a la BD'));
    }
}

connectDB()

// Instancia de express
const server = express()

// Leer datos de formularios # lectura de json
server.use(express.json())

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