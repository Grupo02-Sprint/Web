var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscar/maquinas/:fklojavar", function (req, res) {
    var fklojavar = req.params.fklojavar;
    medidaController.buscarMaquinas(fklojavar, res);
})

router.get("/ultimas/:idMaquina", function (req, res) {
    var idMaquina = req.params.idMaquina;
    medidaController.buscarUltimasMedidasCpu(idMaquina, res);
    medidaController.buscarUltimasMedidasDisco(idMaquina, res);
    medidaController.buscarUltimasMedidasRam(idMaquina, res);
    medidaController.buscarUltimasMedidasRede(idMaquina, res);
});

router.get("/tempo-real/:idMaquina", function (req, res) {
    var idMaquina = req.params.idMaquina;
    medidaController.buscarMedidasEmTempoRealCpu(idMaquina, res);
    medidaController.buscarMedidasEmTempoRealDisco(idMaquina, res);
    medidaController.buscarMedidasEmTempoRealRam(idMaquina, res);
    medidaController.buscarMedidasEmTempoRealRede(idMaquina, res);
})


module.exports = router;