const mongoose = require("mongoose");

const Circuito = mongoose.model("Circuito", {
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
    capacidadCoches: {
        type: Number,
        required: true,
        default: 10,
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
    disponible: {
        type: Date,
        required: false,
    },
    capacidadTotal: {
        type: Number,
        required: true,
        default: 10,
    },
});

module.exports = Circuito;
