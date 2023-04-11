const Circuito = require('../models/circuito')
const express = require('express')
const autentificacion = require('../middleware/autentificacion')
const router = new express.Router()

router.post('/registrarcircuito', autentificacion, async (req, res) => {
    const circuito = new Circuito(req.body)

    try {
        await circuito.save()
        res.status(201).send(circuito)
    } catch (e) {
        res.status(400).send()
    }
})


router.get('/obtenercircuito', autentificacion, async (req, res) => {
    try {
        const circuito = await Circuito.find({})
        res.status(200).send(circuito)
    } catch (e) {
        res.status(500).send()
    }

})

router.get('/obtenercircuito/:id', autentificacion, async (req, res) => {
    const _id = req.params.id
    try {
        const circuito = await Circuito.findById(_id)


        if (!circuito) {
            return res.status(404).send()
        }

        res.status(200).send(circuito)

    } catch (e) {
        res.status(500).send();
    }

})


router.patch('/actualizarcircuito/:id', autentificacion, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['nombre', 'ubicacion', 'extension', 'descripcion', 'disponible']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: '¡Error al actualizar!' })
    }

    try {
        const circuito = await Circuito.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!circuito) {
            return res.status(404).send()
        }

        res.send(circuito)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.delete('/eliminarcircuito/:id', autentificacion, async (req, res) => {
    try {
        const circuito = await Circuito.findByIdAndDelete(req.params.id)

        if (!circuito) {
            res.status(404).send()
        }

        res.send(circuito)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router