import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

// Utiliza import.meta.url para obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [join(__dirname, '../models/*.ts')]
});

export default db;

// import { Sequelize } from 'sequelize-typescript'
// import dotenv from 'dotenv'
// dotenv.config()

// La conexión necesita SSL/TLS
// Cualquiera de las dos funcionan
// en este caso se agrega al final, esto viene en las variables de entorno # ! se garantiza que el valor está ahí
// const db = new Sequelize(process.env.DATABASE_URL!, {
//     models: [__dirname + '/../models/**/*.ts']
// })
// agregando el modelo #Product.models.ts
    // función especial de node.js que retorna la ubicación del archivo que está mandando a llamar

// const db = new Sequelize(process.env.DATABASE_URL!, {
//     dialectOptions: {
//         ssl: {
//             require: false
//         }
//     }
// })

// export default db