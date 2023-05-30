var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

router.post("/cadastrar/:idUsuario", function (req, res) {
    funcionarioController.cadastrar(req, res);
});

router.get("/buscar-por-usuario/:idUsuario", function (req, res) {
    funcionarioController.buscarPorUsuario(req, res);
});

router.get("/listar/:fkLoja", function (req, res) {
    funcionarioController.listar(req, res);
});

router.delete("/deletar/:idUsuario", function (req, res) {
    funcionarioController.deletar(req, res);
});

router.put("/editar", function (req, res) {
    funcionarioController.editar(req, res);
});

module.exports = router;