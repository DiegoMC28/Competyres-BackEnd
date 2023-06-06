const mongoose = require('mongoose')

mongoose.connect(process.env.CONEXION, {
    useNewUrlParser: true
})