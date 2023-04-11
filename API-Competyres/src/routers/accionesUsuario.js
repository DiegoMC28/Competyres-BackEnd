const express = require('express')
const Usuario = require('../models/usuario')
const autentificacion = require('../middleware/autentificacion')
const router = new express.Router()

router.post('/realizaralquiler', autentificacion, async (req, res) => {

    try {
        const usuario = req.usuario
        usuario.alquileres.push(req.body)
        await usuario.save()
        return res.status(200).send(usuario)
    } catch (e) {
        res.status(400).send(e)
    }

})

module.exports = router