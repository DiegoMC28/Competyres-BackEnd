const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    edad: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('La edad debe ser un numero positivo')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('El email no es valido')
            }
        }
    },
    contrasena: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('contrasena')) {
                throw new Error('La contrasena contiene "contrasena"')
            }
        }
    },
    alquileres: [{
        coche: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Coche"
        },
        circuito: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Circuito"
        },
        fecha: {
            type: Date,
            required: true
        },
        vueltas: {
            type: Number,
            required: true
        },
        precio: {
            type: Number,
            required: true
        }
    }],
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

usuarioSchema.methods.toJSON = function () {
    const usuario = this
    const objetoUsuario = usuario.toObject()

    delete objetoUsuario.contrasena
    delete objetoUsuario.tokens

    return objetoUsuario
}


usuarioSchema.methods.generateAuthToken = async function () {
    const usuario = this
    const token = jwt.sign({ _id: usuario._id.toString() }, 'la33delnano;')

    usuario.tokens = usuario.tokens.concat({ token })
    await usuario.save()

    return token
}


usuarioSchema.statics.findByCredentials = async (email, contrasena) => {
    const usuario = await Usuario.findOne({ email })

    if (!usuario) {
        throw new Error('Error al introducir el email')
    }

    const isMatch = await bcrypt.compare(contrasena, usuario.contrasena)

    if (!isMatch) {
        throw new Error('Error al introducir la contrasena')
    }

    return usuario
}


usuarioSchema.pre('save', async function (next) {
    const usuario = this

    if (usuario.isModified('contrasena')) {
        usuario.contrasena = await bcrypt.hash(usuario.contrasena, 8)
    }

    next()
})

const Usuario = mongoose.model('Usuario', usuarioSchema)

module.exports = Usuario