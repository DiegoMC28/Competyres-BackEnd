const Coche = require('../models/coche')
const express = require('express')
const autentificacion = require('../middleware/autentificacion')
const router = new express.Router()

router.post('/coche', autentificacion,async (req, res) => {
    const coche = new Coche(req.body)

    try {
        await coche.save()
        res.status(201).send(coche)
    } catch (e) {
        res.status(400).send()
    }
})


router.get('/coches',async (req, res)=>{
    try {
        const coche = await Coche.find({})
        res.status(200).send(coche)
    }catch (e) {
        res.status(500).send()
    }

})

router.get('/coche/:id',async (req, res)=>{
    const _id = req.params.id
    try{
        const coche = await Coche.findById(_id)
        

        if (!coche) return res.status(404).send()

        res.status(200).send(coche)

    }catch (e){
        res.status(500).send();
    }

})


router.patch('/coche/:id', autentificacion,async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['modelo', 'escuderia', 'categoria', 'ultimoAñoDeCompeticion', 'precio', 'descripcion', 'disponible']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: '¡Error al actualizar!' })
    }

    try {
        const coche = await Coche.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!coche) return res.status(404).send()

        res.send(coche)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.delete('/coche/:id', autentificacion,async (req, res) => {
    try {
        const coche = await Coche.findByIdAndDelete(req.params.id)

        if (!coche) res.status(404).send()

        res.send(coche)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router