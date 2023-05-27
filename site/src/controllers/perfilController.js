var perfilModel = require("../models/perfilModel");

function listar(req, res) {
    var idUsuario = req.params.idUsuario;
    
    perfilModel.listar(idUsuario).then(function (resultado) {
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

function editar(req, res) {
    var novoNome = req.body.nome;
    var novoCargo = req.body.cargo;
    var novoEmail = req.body.email;
    var idUsuario = req.params.idUsuario;

    perfilModel.editar(novoNome,novoCargo, novoEmail, idUsuario)
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
    listar,
    editar
}