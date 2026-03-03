const express = require("express");
const app = express();
const usersRoutes = require("./routes/usersRoutes");
console.log("Rutas cargadas:", usersRoutes.stack.map(r => r.route.path));


app.use(express.json());

// Prefijo para los endpoints
app.use("/api", usersRoutes);

app.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});
