const express = require('express')

const app = express()
const port = 3000



app.get('/', (req, res)=>{
    res.send('La suma de 8 + 10 es:' + '18')
 
})

app.listen(port,() =>{
    console.log(`El servidor se está ejecutando en http://localhost:${port}`)
})