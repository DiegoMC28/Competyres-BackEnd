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

router.post('/login', async (req, res) => {
    try {
        const usuario = await Usuario.findByCredentials(req.body.email, req.body.contrasena)
        const token = await usuario.generateAuthToken()
        res.send({ usuario, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.patch('/actualizarusuario/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['nombre', 'apellido', 'edad', 'email', 'contrasena']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: '¡Error al actualizar!' })
    }

    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!usuario) {
            return res.status(404).send()
        }

        res.send(usuario)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router