var lojaModel = require("../models/lojaModel");

var sessoes = [];

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var telefone = req.body.telefoneServer;
    var cnpj = req.body.cnpjServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Verifique se seus dados foram preenchidos corretamente!");
    } else if (telefone == undefined) {
        res.status(400).send("Verifique se seus dados foram preenchidos corretamente!");
    } else if (cnpj == undefined) {
        res.status(400).send("Verifique se seus dados foram preenchidos corretamente!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        lojaModel.cadastrar(nome, telefone, cnpj)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}