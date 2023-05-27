var database = require("../database/config")

function listar(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idUsuario);
    var instrucao = `
    SELECT u.nome, u.email, u.fkCargo, l.nome as nomeLoja, l.telefone, l.cnpj from usuario as u inner join loja as l on u.fkLoja = l.idLoja where idUsuario = '${idUsuario}'
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novoNome, novoCargo, novoEmail, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novoNome, novoCargo, novoEmail, idUsuario);
    var instrucao = `
        UPDATE Usuario SET nome='${novoNome}', fkCargo = '${novoCargo}', email = '${novoEmail}' WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    editar
}