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
    contraseña: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('contraseña')) {
                throw new Error('La contraseña no contiene "contraseña"')
            }
        }
    },
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

    delete objetoUsuario.contraseña
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


usuarioSchema.statics.findByCredentials = async (email, contraseña) => {
    const usuario = await usuario.findOne({ email })

    if (!usuario) {
        throw new Error('Error al introducir el email')
    }

    const isMatch = await bcrypt.compare(contraseña, usuario.contraseña)

    if (!isMatch) {
        throw new Error('Error al introducir la contraseña')
    }

    return usuario
}


usuarioSchema.pre('save', async function (next) {
    const usuario = this

    if (usuario.isModified('contraseña')) {
        usuario.contraseña = await bcrypt.hash(user.contraseña, 8)
    }

    next()
})

const Usuario = mongoose.model('Usuario', usuarioSchema)

module.exports = Usuario