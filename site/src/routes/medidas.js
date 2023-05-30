var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscar/maquinas/:fklojavar", function (req, res) {
    var fklojavar = req.params.fklojavar;
    medidaController.buscarMaquinas(fklojavar, res);
})

router.get("/ultimas/:fklojavar", function (req, res) {
    var fklojavar = req.params.fklojavar;
    medidaController.buscarUltimasMedidas(fklojavar, res);
});

router.get("/tempo-real/:fklojavar", function (req, res) {
    var fklojavar = req.params.fklojavar;
    medidaController.buscarMedidasEmTempoReal(fklojavar, res);
})


module.exports = router;