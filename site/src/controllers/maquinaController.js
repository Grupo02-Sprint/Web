var maquinaModel = require("../models/maquinaModel");

function cadastrar(req, res) {
    var patrimonio = req.body.patrimonioServer;
    var idLoja = req.body.idLojaServer;
    var senha = req.body.senhaServer;

    if (patrimonio == undefined||patrimonio==null||patrimonio=="") {
        res.status(400).send("O patrimonio está indefinido!");
    } else if (idLoja == undefined||idLoja==null||idLoja=="") {
        res.status(403).send("O Usauario está indefinido!!");
    } else if (senha == undefined||senha==null||senha=="") {
        res.status(403).send("O Usauario está indefinido!!");
    } else{
        maquinaModel.cadastrar(patrimonio, idLoja, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    var fkLoja = req.params.fkLoja;
    maquinaModel.listar(fkLoja).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as máquinas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function editar(req, res) {
    var novoPatrimonio = req.body.patrimonio;
    var idMaquina = req.body.idMaquina;
    var idLoja = req.body.idLoja
    console.log("definindo idLoja",idLoja);
    maquinaModel.editar(novoPatrimonio, idMaquina, idLoja)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function deletar(req, res) {
    var idMaquina = req.params.idMaquina;
    var idLoja = req.body.idLoja
    maquinaModel.deletar(idMaquina, idLoja)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrar,
    listar,
    editar,
    deletar
}