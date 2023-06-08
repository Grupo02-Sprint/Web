var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscar/maquinas/:fklojavar", function (req, res) {
    var fklojavar = req.params.fklojavar;
    medidaController.buscarMaquinas(fklojavar, res);
})

router.get("/ultimas/:idMaquina/:tipoGrafico", function (req, res) {
    var idMaquina = req.params.idMaquina;
    var tipoGrafico = req.params.tipoGrafico;
    medidaController.buscarUltimasMedidas(idMaquina, tipoGrafico, res);
});

router.get("/tempo-real/:idMaquina/:tipoGrafico", function (req, res) {
    var idMaquina = req.params.idMaquina;
    var tipoGrafico = req.params.tipoGrafico;
    medidaController.buscarMedidasEmTempoReal(idMaquina, tipoGrafico, res);
})


module.exports = router;