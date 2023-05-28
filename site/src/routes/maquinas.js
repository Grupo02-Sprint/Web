var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.post("/cadastrar/:idLoja", function (req, res) {
    maquinaController.cadastrar(req, res);
});

router.get("/listar/:fkLoja", function (req, res) {
    maquinaController.listar(req, res);
});

router.put("/editar/:fkLoja", function (req, res) {
    maquinaController.editar(req, res);
});

router.delete("/deletar/:idMaquina", function (req, res) {
    maquinaController.deletar(req, res);
});

module.exports = router;