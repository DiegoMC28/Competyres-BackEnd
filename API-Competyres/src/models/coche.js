const mongoose = require('mongoose')

const Coche = mongoose.model('Coche', {
    modelo: {
        type: String,
        required: true,
        trim: true
    },
    escuderia: {
        type: String,
        required: true,
        trim: true
    },
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    ultimoAñoDeCompeticion: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 1894) {
                throw new Error('El año debe ser un numero mayor que 1894')
            }
        }
    },
    precio: {
        type: Number,
        required: true
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

module.exports = Coche