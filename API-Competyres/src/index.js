const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/mongoose");
const usuarioRouter = require("./routers/usuario");
const cocheRouter = require("./routers/coche");
const valoracionRouter = require("./routers/valoraciones");
const circuitoRouter = require("./routers/circuito");
const accionesUsuario = require("./routers/accionesUsuario");
const path = require("path");

const app = express();
const port = process.env.PORT || 3028;

app.use(cors());
app.use(express.json());
app.use(usuarioRouter);
app.use(cocheRouter);
app.use(circuitoRouter);
app.use(valoracionRouter);
app.use(accionesUsuario);

const public = path.join(__dirname, "../public");

app.use(express.static(public));

app.get("/docs/developer", (req, res) => {
    res.sendFile(path.join(__dirname, "../docs/developer.html"));
});

app.get("/docs/user", (req, res) => {
    res.sendFile(path.join(__dirname, "../docs/user.html"));
});

app.get("/docs/resources/:file", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../docs/resources") + "/" + req.params.file
    );
});

app.get("*", (req, res) => {
    res.sendFile(path.join(public, "index.html"));
});

app.listen(port, () => {
    console.log("Servidor abierto en el puerto: " + port);
});
