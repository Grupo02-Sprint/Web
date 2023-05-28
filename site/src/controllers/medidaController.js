var medidaModel = require("../models/medidaModel");

function buscarMaquinas(fklojavar, res) {
    var id_loja = fklojavar;

    if (id_loja == undefined) {
        res.status(400).send("Sua loja é undefined");
    } else {
        console.log(`Buscando maquinas que pertencem a loja de id ${id_loja}`);

        medidaModel.buscarMaquinas(id_loja)
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        console.log(resultado);
                        res.json(resultado);
                    } else {
                        res.status(403).send("Nenhuma maquina encontrada");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao buscar as maquinas.", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage)
                }
            );
    }
}

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 9;

    //var idComponente = 1;
    var idMaquina = req.params.idMaquina;
    console.log(idMaquina)

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idMaquina, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idMaquina = 1;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idComponente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarMaquinas,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal

}