var database = require("../database/config")

function listar(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idUsuario);
    var instrucao = `
    SELECT u.nome, u.email, u.fkCargo,l.idLoja, l.nome as nomeLoja, l.telefone, l.cnpj from usuario as u inner join loja as l on u.fkLoja = l.idLoja where idUsuario = '${idUsuario}'
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarUsuario(novoNome, novoCargo, novoEmail, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editarUsuario(): ", novoNome, novoCargo, novoEmail, idUsuario);
    var instrucao = `
        UPDATE Usuario SET nome='${novoNome}', fkCargo = '${novoCargo}', email = '${novoEmail}' WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarLoja(novoNome, novoTelefone, novoCNPJ, idLoja) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editarLoja(): ", novoNome, novoTelefone, novoCNPJ, idLoja);
    var instrucao = `
        UPDATE Loja SET nome='${novoNome}', telefone = '${novoTelefone}', cnpj = '${novoCNPJ}' WHERE idLoja = ${idLoja};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    editarUsuario,
    editarLoja
}