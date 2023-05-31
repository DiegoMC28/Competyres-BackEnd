const Circuito = require("../models/circuito");
const express = require("express");
const autentificacion = require("../middleware/autentificacion");
const router = express.Router();

router.post("/circuito", async (req, res) => {
    const circuito = new Circuito(req.body);

    try {
        await circuito.save();
        res.status(201).send(circuito);
    } catch (e) {
        res.status(400).send();
    }
});

router.get("/circuitos", async (req, res) => {
    try {
        const circuito = await Circuito.find({});
        res.status(200).send(circuito);
    } catch (e) {
        res.status(500).send();
    }
});

router.get("/circuito/:id", async (req, res) => {
    const _id = req.params.id;
    //Nos traemos los usuarios filtrando por alquiler.circuito y los mapeamos
    //para que nos devuelvan los alquileres y filtramos los que ya se hayan pasado
    //de la fecha actual.
    try {
        const circuito = await Circuito.findById(_id);

        if (!circuito) return res.status(404).send();

        res.status(200).send(circuito);
    } catch (e) {
        res.status(500).send();
    }
});

router.get("/buscar/circuitos", async (req, res) => {
    const { filtro } = req.query;

    try {
        const regex = new RegExp(filtro, "gi");
        const circuitos = await Circuito.find({
            $or: [
                { nombre: { $regex: regex } },
                { ubicacion: { $regex: regex } },
            ],
        });

        if (!circuitos) return res.status(404).send([]);

        res.status(200).send(circuitos);
    } catch (e) {
        res.status(500).send();
    }
});

router.patch("/circuito/:id", autentificacion, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        "nombre",
        "ubicacion",
        "extension",
        "descripcion",
        "disponible",
    ];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: "¡Error al actualizar!" });
    }

    try {
        const circuito = await Circuito.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!circuito) return res.status(404).send();

        res.send(circuito);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete("/circuito/:id", autentificacion, async (req, res) => {
    try {
        const circuito = await Circuito.findByIdAndDelete(req.params.id);

        if (!circuito) res.status(404).send();

        res.send(circuito);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
