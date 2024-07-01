import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

// La conexión necesita SSL/TLS
// Cualquiera de las dos funcionan

const db = new Sequelize(process.env.DATABASE_URL!) // en este caso se agrega al final, esto viene en las variables de entorno # ! se garantiza que el valor está ahí
// const db = new Sequelize(process.env.DATABASE_URL!, {
//     dialectOptions: {
//         ssl: {
//             require: false
//         }
//     }
// })

export default db