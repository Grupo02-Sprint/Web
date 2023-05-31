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

async function buscarUltimasMedidasCpu(idMaquina, res) {

    const limite_linhas = 7;

    //var idComponente = 1;
    var id_maquina = idMaquina;
    console.log(id_maquina)

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    await medidaModel.buscarUltimasMedidasCpu(id_maquina, limite_linhas)
        .then(function (resultadoCpu) {
            if (resultadoCpu.length > 0) {
                res.status(200).json(resultadoCpu);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

async function buscarUltimasMedidasDisco(idMaquina, res) {

    const limite_linhas = 7;

    //var idComponente = 1;
    var id_maquina = idMaquina;
    console.log(id_maquina)

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    await medidaModel.buscarUltimasMedidasDisco(id_maquina, limite_linhas)
        .then(function (resultadoDisco) {
            if (resultadoDisco.length > 0) {
                res.status(200).json(resultadoDisco);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

async function buscarUltimasMedidasRam(idMaquina, res) {

    const limite_linhas = 7;

    //var idComponente = 1;
    var id_maquina = idMaquina;
    console.log(id_maquina)

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    await medidaModel.buscarUltimasMedidasRam(id_maquina, limite_linhas)
        .then(function (resultadoRam) {
            if (resultadoRam.length > 0) {
                res.status(200).json(resultadoRam);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

async function buscarUltimasMedidasRede(idMaquina, res) {

    const limite_linhas = 7;

    //var idComponente = 1;
    var id_maquina = idMaquina;
    console.log(id_maquina)

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    await medidaModel.buscarUltimasMedidasRede(id_maquina, limite_linhas)
        .then(function (resultadoRede) {
            if (resultadoRede.length > 0) {
                res.status(200).json(resultadoRede);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


async function buscarMedidasEmTempoRealCpu(idMaquina, res) {

    var id_maquina = idMaquina;

    console.log(`Recuperando medidas em tempo real`);

    await medidaModel.buscarMedidasEmTempoRealCpu(id_maquina).then(function (resultado1Cpu) {
        if (resultado1Cpu.length > 0) {
            res.status(200).json(resultado1Cpu);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
async function buscarMedidasEmTempoRealDisco(idMaquina, res) {

    var id_maquina = idMaquina;

    console.log(`Recuperando medidas em tempo real`);

    await medidaModel.buscarMedidasEmTempoRealDisco(id_maquina).then(function (resultado1Disco) {
        if (resultado1Disco.length > 0) {
            res.status(200).json(resultado1Disco);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
async function buscarMedidasEmTempoRealRam(idMaquina, res) {

    var id_maquina = idMaquina;

    console.log(`Recuperando medidas em tempo real`);

    await medidaModel.buscarMedidasEmTempoRealRam(id_maquina).then(function (resultado1Ram) {
        if (resultado1Ram.length > 0) {
            res.status(200).json(resultado1Ram);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
async function buscarMedidasEmTempoRealRede(idMaquina, res) {

    var id_maquina = idMaquina;

    console.log(`Recuperando medidas em tempo real`);

    await medidaModel.buscarMedidasEmTempoRealRede(id_maquina).then(function (resultado1Rede) {
        if (resultado1Rede.length > 0) {
            res.status(200).json(resultado1Rede);
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
    buscarUltimasMedidasCpu,
    buscarUltimasMedidasDisco,
    buscarUltimasMedidasRam,
    buscarUltimasMedidasRede,
    buscarMedidasEmTempoRealCpu,
    buscarMedidasEmTempoRealDisco,
    buscarMedidasEmTempoRealRam,
    buscarMedidasEmTempoRealRede

}