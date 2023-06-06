const express = require("express");
const cors = require("cors");
require("dotenv").config()
require("./db/mongoose");
const usuarioRouter = require("./routers/usuario");
const cocheRouter = require("./routers/coche");
const valoracionRouter = require("./routers/valoraciones");
const circuitoRouter = require("./routers/circuito");
const accionesUsuario = require("./routers/accionesUsuario");

const app = express();
const port = process.env.PORT || 3028;

app.use(cors());
app.use(express.json());
app.use(usuarioRouter);
app.use(cocheRouter);
app.use(circuitoRouter);
app.use(valoracionRouter);
app.use(accionesUsuario);

app.listen(port, () => {
  console.log("Servidor abierto en el puerto: " + port);
});
