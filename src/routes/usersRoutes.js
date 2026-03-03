const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/usuarios", usersController.getUsers);
router.get("/usuarios/:id", usersController.getUserById);
router.post("/usuarios", usersController.createUser);
router.put("/usuarios/:id", usersController.updateUser);
router.delete("/usuarios/:id", usersController.deleteUser);

module.exports = router;


