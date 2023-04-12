const express = require('express')
const Usuario = require('../models/usuario')
const Coche = require('../models/coche')
const Circuito = require('../models/circuito')
const autentificacion = require('../middleware/autentificacion')
const router = new express.Router()

router.post('/realizaralquiler', autentificacion, async (req, res) => {

    try {
        const usuario = req.usuario
        const coche = await Coche.findById(req.body.coche)
        const circuito = await Circuito.findById(req.body.circuito)

        if (coche.disponible === true && circuito.capacidadCoches > 0) {
            coche.disponible = false
            await coche.save()
            circuito.capacidadCoches -= 1
            await circuito.save()
            usuario.alquileres.push(req.body)
            await usuario.save()
            return res.status(200).send(usuario)
        } else {
            return res.status(405).send("Coche/Circuito no disponible")
        }


    } catch (e) {
        res.status(400).send(e)
    }

})

router.get('/obteneralquileres', autentificacion, async (req, res) => {

    try {
        return res.send(req.usuario.alquileres)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.delete('/eliminaralquiler/:id', autentificacion, async (req, res) => {
    try {
        const usuario = req.usuario

        for (let i = 0; i < usuario.alquileres.length; i++) {
            if (usuario.alquileres[i].id === req.params.id) {
                const coche = await Coche.findById(usuario.alquileres[i].coche)
                coche.disponible = true
                await coche.save()
                const circuito = await Circuito.findById(usuario.alquileres[i].circuito)
                circuito.capacidadCoches += 1
                await circuito.save()
                usuario.alquileres.splice(i, 1)
                await usuario.save()
                return res.send(usuario)
            } else {
                res.status(400).send(e)
            }
        }

    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router