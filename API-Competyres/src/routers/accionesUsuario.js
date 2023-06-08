const express = require("express");
const Usuario = require("../models/usuario");
const Coche = require("../models/coche");
const Circuito = require("../models/circuito");
const autentificacion = require("../middleware/autentificacion");

const router = new express.Router();

router.post("/alquiler", autentificacion, async (req, res) => {
    try {
        const usuario = req.usuario;

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

                usuario.alquileres.splice(i, 1);
                await usuario.save();
                
                await usuario.populate("alquileres.coche");
                await usuario.populate("alquileres.circuito");
                return res.send(usuario.alquileres);
            }
        }
    } catch (e) {
        res.status(500).send([{ error: true, ...usuario }]);
    }
});

module.exports = router;
