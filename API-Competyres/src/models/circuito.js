const mongoose = require("mongoose");

const CircuitoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    ubicacion: {
        type: String,
        required: true,
        trim: true,
    },
    extension: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    precioPorVuelta: {
        type: Number,
        required: true,
        default: 50,
    },
    imagen: {
        type: String,
        required: false,
        default: "",
    },
    // disponible: {
    //     type: Date,
    //     required: false,
    // },
    capacidadTotal: {
        type: Number,
        required: true,
        default: 10,
    },
    pais: {
        type: String,
        required: true,
        default: "ES",
    },
});

const Circuito = mongoose.model("Circuito", CircuitoSchema);

module.exports = Circuito;
