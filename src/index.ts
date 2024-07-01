import server from './server'

server.listen(4000, () => { // listen monta la aplicación y le asigna el puerto
    console.log('REST API en el puerto 4000');
})