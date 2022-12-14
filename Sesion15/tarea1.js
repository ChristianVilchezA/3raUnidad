const http = require('http')

console.log(http)

const hostname = '127.0.0.1'
const port = 3000
let nombre = 'Christian Omar'
let apellidos = 'Vilchez Arevalo'

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end(`Hola Mi Nombre Completo es: ${nombre} ${apellidos}.`)
})


server.listen(port, hostname, () =>{
    console.log (`El servidor se está ejecutando en http://${hostname}:${port}/`)
    console.log (`Mi Nombre Completo es: ${nombre} ${apellidos}.`)
})
