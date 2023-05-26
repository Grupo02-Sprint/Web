var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/listar", function (req, res) {
    perfilController.listar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    perfilController.editar(req, res);
});

module.exports = router;