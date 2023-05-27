var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/listar/:idUsuario", function (req, res) {
    perfilController.listar(req, res);
});

router.put("/editarUsuario/:idUsuario", function (req, res) {
    perfilController.editarUsuario(req, res);
});

router.put("/editarLoja/:idLoja", function (req, res) {
    perfilController.editarLoja(req, res);
});

module.exports = router;