const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario')

const autentificacion = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'la33delnano;')
        const usuario = await Usuario.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!usuario) {
            throw new Error()
        }

        req.token = token
        req.usuario = usuario
        next()
    } catch (e) {
        res.status(401).send({ error: 'Por favor, verifique su cuenta.' }) 
    }
}

module.exports = autentificacion