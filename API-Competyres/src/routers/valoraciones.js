const Valoracion = require("../models/valoracion");
const express = require("express");
const autentificacion = require("../middleware/autentificacion");
const router = new express.Router();

router.post("/valoracion", autentificacion, async (req, res) => {
  const usuario = req.usuario;
  const valoracion = await Valoracion.findOne({ usuario: usuario._id });
  try {
    if (valoracion) {
      await Valoracion.findByIdAndDelete(valoracion._id);
    }

    const { comentario, fechaPublicacion, puntuacion } = req.body;
    const nuevaValoracion = new Valoracion({
      usuario: usuario._id,
      comentario,
      fechaPublicacion,
      puntuacion,
    });

    await nuevaValoracion.save();
    res.status(201).send(valoracion);
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/valoraciones", async (req, res) => {
  try {
    const valoraciones = await Valoracion.find({});
    for (let i = 0; i < valoraciones.length; i++) {
      await valoraciones[i].populate("usuario");
    }

    res.status(200).send(valoraciones);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/valoracion/:id", autentificacion, async (req, res) => {
  const _id = req.params.id;
  try {
    const valoracion = await Valoracion.findById(_id);

    if (!valoracion) return res.status(404).send();
    await valoracion.populate("usuario");
    res.status(200).send(valoracion);
  } catch (e) {
    res.status(500).send();
  }
});

router.delete("/valoracion/:id", autentificacion, async (req, res) => {
  try {
    const valoracion = await Valoracion.findByIdAndDelete(req.params.id);

    if (!valoracion) res.status(404).send();
    await valoracion.populate("usuario");
    res.send(valoracion);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
