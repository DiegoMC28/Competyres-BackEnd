const express = require('express')
require('./db/mongoose')
const usuarioRouter = require('./routers/usuario')
const cocheRouter = require('./routers/coche')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(usuarioRouter)
app.use(cocheRouter)

app.listen(port, () => {
    console.log('Servidor abierto en el puerto: ' + port)
})