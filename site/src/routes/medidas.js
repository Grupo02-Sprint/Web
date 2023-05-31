var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscar/maquinas/:fklojavar", function (req, res) {
    var fklojavar = req.params.fklojavar;
    medidaController.buscarMaquinas(fklojavar, res);
})

router.get("/ultimas/:idMaquina", function (req, res) {
    var idMaquina = req.params.idMaquina;
    // var tipo_componente = req.params.componente
    medidaController.buscarUltimasMedidas(idMaquina, res);
});

router.get("/tempo-real/:idMaquina", function (req, res) {
    var idMaquina = req.params.idMaquina;
    medidaController.buscarMedidasEmTempoReal(idMaquina, res);
})


module.exports = router;