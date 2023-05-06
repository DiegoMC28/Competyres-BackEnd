const express = require('express')
const cors = require('cors');
require('./db/mongoose')
const usuarioRouter = require('./routers/usuario')
const cocheRouter = require('./routers/coche')
const circuitoRouter = require('./routers/circuito')
const noticiaRouter = require('./routers/noticia')
const accionesUsuario = require('./routers/accionesUsuario')

const app = express()
const port = process.env.PORT || 3028

app.use(cors())
app.use(express.json())
app.use(usuarioRouter)
app.use(cocheRouter)
app.use(circuitoRouter)
app.use(noticiaRouter)
app.use(accionesUsuario)

app.listen(port, () => {
    console.log('Servidor abierto en el puerto: ' + port)
})