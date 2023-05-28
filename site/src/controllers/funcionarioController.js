var funcionarioModel = require("../models/funcionarioModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var cargo = req.body.cargoServer;
    var idUsuario = req.params.idUsuario;
    var email = req.body.emailServer;
    var idLoja = req.body.idLojaServer;
    var senha = req.body.senhaServer;

    if (nome == undefined||nome==null||nome=="") {
        res.status(400).send("O nome está indefinido!");
    } else if (cargo == undefined||cargo==null||cargo==""||cargo==0) {
        res.status(400).send("O cargo está indefinido!");
    } else if (idUsuario == undefined||idUsuario==null||idUsuario=="") {
        res.status(403).send("O email do usuário está indefinido!");
    } else if (email == undefined||email==null||email=="") {
        res.status(400).send("O id do usuário está indefinido!");
    } else if (idLoja == undefined||idLoja==null||idLoja=="") {
        res.status(400).send("O id do usuário está indefinido!");
    } else if (senha == undefined||senha==null||senha=="") {
        res.status(400).send("O id do usuário está indefinido!");
    } else {
        funcionarioModel.cadastrar(nome, cargo, idUsuario, email, idLoja, senha)
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
    console.log(`fkLoja`);
    funcionarioModel.listar(fkLoja).then(function (resultado) {
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
    var idUsuario = req.params.idUsuario;

    funcionarioModel.deletar(idUsuario)
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
    var idUsuario = req.body.idUsuario;

    funcionarioModel.editar(novoCargo, novoEmail, idUsuario)
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

function buscarPorUsuario(req, res){
    var idUsuario = req.params.idUsuario;
  
    if(idUsuario == undefined){
      res.status(400).send("Seu cnpj está undefiened!")
    }else{
      funcionarioModel 
      .buscarPorUsuario(idUsuario)
      .then (function(resultado){
  
        console.log(resultado);
        
        if(resultado.length ==1){
          res.status(200).json(resultado[0]);
        } else {
          res.status(204).send("Nenhum resultado encontrado!")
        }
      })
      .catch(function(erro){
        console.log(
          "Houve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
    }
  }

module.exports = {
    cadastrar,
    listar,
    deletar,
    editar,
    buscarPorUsuario
}