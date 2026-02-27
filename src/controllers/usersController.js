const db = require("../db");

// Obtener todos los usuarios
exports.getUsers = (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Obtener un usuario por ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(results[0]);
  });
};

// Crear usuario
exports.createUser = (req, res) => {
  const { nombre, email, edad } = req.body;
  db.query(
    "INSERT INTO usuarios (nombre, email, edad) VALUES (?, ?, ?)",
    [nombre, email, edad],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, nombre, email, edad });
    },
  );
};

// Actualizar usuario
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nombre, email, edad } = req.body;

  db.query(
    "UPDATE usuarios SET nombre = ?, email = ?, edad = ? WHERE id = ?",
    [nombre, email, edad, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Usuario actualizado correctamente" });
    },
  );
};

// Eliminar usuario
exports.deleteUser = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM usuarios WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Usuario eliminado correctamente" });
  });
};
