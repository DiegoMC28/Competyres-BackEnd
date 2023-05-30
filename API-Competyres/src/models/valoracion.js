const mongoose = require("mongoose");

const Valoracion = mongoose.model("Valoracion", {
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Usuario",
  },
  comentario: {
    type: String,
    required: false,
    trim: true,
  },
  fechaPublicacion: {
    type: Date,
    required: true,
    trim: true,
  },
  puntuacion: {
    type: Number,
    required: true,
    default: 1,
  },
});

module.exports = Valoracion;
