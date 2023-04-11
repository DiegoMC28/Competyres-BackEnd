const express = require('express')
const Usuario = require('../models/usuario')
const autentificacion = require('../middleware/autentificacion')
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

router.post('/logout', autentificacion, async (req, res) => {
    try {
        req.usuario.tokens = req.usuario.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.usuario.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})


router.get('/obtenerusuario', autentificacion, async (req, res) => {
    res.send(req.usuario)
})

router.patch('/actualizarusuario', autentificacion, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['nombre', 'apellido', 'edad', 'email', 'contrasena']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: '¡Error al actualizar!' })
    }

    try {
        updates.forEach((update) => req.usuario[update] = req.body[update])
        await req.usuario.save()
        res.send(req.usuario)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/eliminarusuario/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id)

        if (!usuario) {
            res.status(404).send()
        }

        res.send(usuario)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router