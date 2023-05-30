var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/listar/:idUsuario", function (req, res) {
    perfilController.listar(req, res);
});

router.get("/listarvalores/:fkLoja", function (req, res) {
    perfilController.listarValores(req, res);
});

router.put("/editarUsuario/:idUsuario", function (req, res) {
    perfilController.editarUsuario(req, res);
});

router.put("/editarLoja/:idLoja", function (req, res) {
    perfilController.editarLoja(req, res);
});

router.put("/salvarcpu", function (req, res) {
    perfilController.salvarCpu(req, res);
});

router.put("/salvarmemoria", function (req, res) {
    perfilController.salvarMemoria(req, res);
});

router.put("/salvararmazenamento", function (req, res) {
    perfilController.salvarArmazenamento(req, res);
});

module.exports = router;