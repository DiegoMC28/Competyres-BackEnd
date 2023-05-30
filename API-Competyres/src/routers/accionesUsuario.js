const express = require("express");
const Usuario = require("../models/usuario");
const Coche = require("../models/coche");
const Circuito = require("../models/circuito");
const autentificacion = require("../middleware/autentificacion");
const router = new express.Router();

router.post("/alquiler", autentificacion, async (req, res) => {
    try {
        const usuario = req.usuario;
        const coche = await Coche.findById(req.body.coche);
        const circuito = await Circuito.findById(req.body.circuito);

        if (!coche.disponible)
            return res.status(405).send("Coche no disponible");

        if (!circuito.capacidadCoches)
            return res.status(405).send("Circuito no disponible"); //!0 = true

        coche.disponible = false;
        await coche.save();
        circuito.capacidadCoches -= 1;
        await circuito.save();
        usuario.alquileres.push(req.body);
        await usuario.save();
        return res.status(200).send(usuario);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/alquileres", autentificacion, async (req, res) => {
    try {
        const usuario = req.usuario;
        await usuario.populate("alquileres.coche");
        await usuario.populate("alquileres.circuito");
        return res.send(usuario.alquileres);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/alquiler/:id", autentificacion, async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = req.usuario;
        await usuario.populate("alquileres.coche");
        await usuario.populate("alquileres.circuito");

        const alquiler = usuario.alquileres.find(
            (alquiler) => alquiler.id === id
        );

        if (!alquiler) {
            return res.send("No se encuentra el alquiler");
        }

        return res.send(alquiler);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete("/eliminaralquiler/:id", autentificacion, async (req, res) => {
    try {
        const usuario = req.usuario;

        for (let i = 0; i < usuario.alquileres.length; i++) {
            if (usuario.alquileres[i].id === req.params.id) {
                const coche = await Coche.findById(usuario.alquileres[i].coche);
                coche.disponible = true;
                await coche.save();
                const circuito = await Circuito.findById(
                    usuario.alquileres[i].circuito
                );
                circuito.capacidadCoches += 1;
                await circuito.save();
                usuario.alquileres.splice(i, 1);
                await usuario.save();
                return res.send(usuario);
            }
        }
    } catch (e) {
        res.status(500).send([{ error: true, ...usuario }]);
    }
});

module.exports = router;
