var express = require("express");
var router = express.Router();

var lojaController = require("../controllers/lojaController");

//Recebendo os dados do html e direcionando para a função cadastrar de lojasController.js
router.post("/cadastrar", function (req, res) {
    lojaController.cadastrar(req, res);
})

router.get("/buscar-por-cnpj/:cnpj", function (req, res) {
    lojaController.buscarPorCnpj(req, res);
});

module.exports = router;