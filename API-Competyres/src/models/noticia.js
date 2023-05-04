const mongoose = require('mongoose')

const Noticia = mongoose.model('Noticia', {
    titulo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    cuerpo: {
        type: String,
        required: true,
        trim: true
    },
    fechaPublicacion: {
        type: Date,
        required: true,
        trim: true
    },
    imagen: {
        type: String,
        required: false,
        default: ''
    }
})

module.exports = Noticia