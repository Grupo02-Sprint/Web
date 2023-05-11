var maquinaModel = require("../models/maquinaModel");

function cadastrar(req, res) {
    var patrimonio = req.body.patrimonioServer;
    var idUsuario = req.params.idUsuario;

    if (patrimonio == undefined) {
        res.status(400).send("O patrimonio está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O Usauario está indefinido!!");
    } else{
        maquinaModel.cadastrar(patrimonio, idUsuario)
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
    maquinaModel.listar().then(function (resultado) {
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
    var idAviso = req.body.idMaquina;
    console.log("definindo idAviso",idAviso);
    maquinaModel.editar(novoPatrimonio, idAviso)
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
    var idAviso = req.params.idMaquina;

    maquinaModel.deletar(idAviso)
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