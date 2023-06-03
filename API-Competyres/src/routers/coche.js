const Coche = require("../models/coche");
const Usuario = require("../models/usuario");
const express = require("express");
const autentificacion = require("../middleware/autentificacion");
const router = new express.Router();

router.post("/coche", autentificacion, async (req, res) => {
    const coche = new Coche(req.body);

    try {
        await coche.save();
        res.status(201).send(coche);
    } catch (e) {
        res.status(400).send();
    }
});

router.get("/coches", async (req, res) => {
    try {
        const coche = await Coche.find({});
        res.status(200).send(coche);
    } catch (e) {
        res.status(500).send();
    }
});

router.get("/coche/:id", async (req, res) => {
    const _id = req.params.id;

    const { fecha } = req.query;

    try {
        const usuario = await Usuario.find({
            $and: [
                { "alquileres.coche": _id },
                { "alquileres.fecha": new Date(fecha) },
            ],
        });

        const coche = await Coche.findById(_id);
        if (!coche) return res.status(404).send();

        console.log({usuario, fecha, _id, coche, date:new Date(fecha)});
        res.status(200).send({
            ...coche.toObject(),
            disponible: usuario.length === 0,
        });
    } catch (e) {
        res.status(500).send();
    }
});

router.get("/buscar/coches", async (req, res) => {
    const { filtro, fecha } = req.query;

    try {
        const regex = new RegExp(filtro, "gi");
        const coches = await Coche.find({
            $or: [
                { modelo: { $regex: regex } },
                { escuderia: { $regex: regex } },
                { categoria: { $regex: regex } },
            ],
        });

        if (!coches) return res.status(404).send([]);

        res.status(200).send(coches);
    } catch (e) {
        res.status(500).send();
    }
});

router.patch("/coche/:id", autentificacion, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        "modelo",
        "escuderia",
        "categoria",
        "ultimoAñoDeCompeticion",
        "precio",
        "descripcion",
        "disponible",
        "pais",
    ];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: "¡Error al actualizar!" });
    }

    try {
        const coche = await Coche.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!coche) return res.status(404).send();

        res.send(coche);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete("/coche/:id", autentificacion, async (req, res) => {
    try {
        const coche = await Coche.findByIdAndDelete(req.params.id);

        if (!coche) res.status(404).send();

        res.send(coche);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
