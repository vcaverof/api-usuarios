const express = require("express");
const app = express();
const db = require("./db");
const usersRoutes = require("./routes/usersRoutes");
console.log("Rutas de usuarios cargadas");


app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

// Rutas del CRUD
app.use("/api/users", usersRoutes);

app.listen(3000, () => {
  console.log("API escuchando en puerto 3000");
});


