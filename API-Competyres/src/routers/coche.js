const Coche = require('../models/coche')
const express = require('express')
const router = new express.Router()

router.post('/registrarcoche', async (req, res) => {
    const coche = new Coche(req.body)

    try {
        await coche.save()
        res.status(201).send(coche)
    } catch (e) {
        res.status(400).send()
    }
})


router.get('/obtenercoches', async (req, res)=>{
    try {
        const coche = await Coche.find({})
        res.status(200).send(coche)
    }catch (e) {
        res.status(500).send()
    }

})

router.get('/obtenercoche/:id', async (req, res)=>{
    const _id = req.params.id
    try{
        const coche = await Coche.findById(_id)
        

        if (!coche) {
            return res.status(404).send()
        }

        res.status(200).send(coche)

    }catch (e){
        res.status(500).send();
    }

})

/*
router.patch('/actualizarcoche/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['nombre', 'puntuacion']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: '¡Error al actualizar!' })
    }

    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!course) {
            return res.status(404).send()
        }

        res.send(course)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.delete('/course/:id', async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id)

        if (!course) {
            res.status(404).send()
        }

        res.send(course)
    } catch (e) {
        res.status(500).send()
    }
})

*/

module.exports = router