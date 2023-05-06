var funcionarioModel = require("../models/funcionarioModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var cargo = req.body.cargoServer;
    var idUsuario = req.params.idUsuario;
    var email = req.body.emailServer;

    if (nome == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (cargo == undefined) {
        res.status(400).send("O cargo está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O email do usuário está indefinido!");
    } else if (email == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
    } else {
        funcionarioModel.cadastrar(nome, cargo, idUsuario, email)
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
    funcionarioModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os funcionáriso: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function deletar(req, res) {
    var idAviso = req.params.idAviso;

    funcionarioModel.deletar(idAviso)
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

function editar(req, res) {
    var novoCargo = req.body.cargo;
    var novoEmail = req.body.email;
    var idAviso = req.params.idAviso;

    funcionarioModel.editar(novoCargo, novoEmail, idAviso)
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

module.exports = {
    cadastrar,
    listar,
    deletar,
    editar
}