const express = require('express')
const Usuario = require('../models/usuario')
const router = new express.Router()


router.post('/crearusuario', async (req, res) => {
    const usuario = new Usuario(req.body)

    try {
        const token = await usuario.generateAuthToken()
        await usuario.save()
        return res.status(201).send({ usuario, token })
    } catch (e) {
        res.status(400).send(e)
    }


})

module.exports = router