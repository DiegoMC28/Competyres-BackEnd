const mongoose = require('mongoose')

const Circuito = mongoose.model('Circuito', {
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    ubicacion: {
        type: String,
        required: true,
        trim: true
    },
    extension: {
        type: Number,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true
    }
    ,
    disponible: {
        type: Boolean,
        default: false,
    }
})

module.exports = Circuito