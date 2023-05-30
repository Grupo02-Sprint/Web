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

function buscarUltimasMedidas(fklojavar, res) {

    const limite_linhas = 7;

    //var idComponente = 1;
    var id_Loja = fklojavar;
    console.log(idLoja)

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(id_Loja, limite_linhas).then(function (resultado) {
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


function buscarMedidasEmTempoReal(fklojavar, res) {

    var id_Loja = fklojavar;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(id_Loja).then(function (resultado) {
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