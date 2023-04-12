const express = require('express')
require('./db/mongoose')
const usuarioRouter = require('./routers/usuario')
const cocheRouter = require('./routers/coche')
const circuitoRouter = require('./routers/circuito')
const accionesUsuario = require('./routers/accionesUsuario')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(usuarioRouter)
app.use(cocheRouter)
app.use(circuitoRouter)
app.use(accionesUsuario)

app.listen(port, () => {
    console.log('Servidor abierto en el puerto: ' + port)
})