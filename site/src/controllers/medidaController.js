var medidaModel = require("../models/medidaModel");

function buscarMaquinas(fklojarvar, res) {
    var id_Loja = fklojarvar;

    if (id_Loja == undefined) {
        res.status(400).send("Sua loja é undefined");
    } else {
        console.log(`Buscando maquinas que pertencem a loja de id ${id_Loja}`);

        medidaModel.buscarMaquinas(id_Loja)
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

async function buscarUltimasMedidas(idMaquina, tipoGrafico, res) {

    const limite_linhas = 7;

    //var idComponente = 1;
    var id_maquina = idMaquina;


    console.log(id_maquina)

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    await medidaModel.buscarUltimasMedidas(id_maquina, tipoGrafico, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            console.log(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
            console.log(res);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


async function buscarMedidasEmTempoReal(idMaquina, tipoGrafico, res) {

    var id_maquina = idMaquina;

    console.log(`Recuperando medidas em tempo real`);

    await medidaModel.buscarMedidasEmTempoReal(id_maquina, tipoGrafico).then(function (resultado) {
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