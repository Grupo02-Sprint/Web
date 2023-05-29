var database = require("../database/config")

function listar(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", idUsuario);
    var instrucao = `
    SELECT u.nome, u.email, u.fk_cargo,l.id_loja, l.nome as nomeLoja, l.telefone, l.cnpj from usuario as u inner join loja as l on u.fk_loja = l.id_loja where id_usuario = '${idUsuario}'
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarUsuario(novoNome, novoCargo, novoEmail, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editarUsuario(): ", novoNome, novoCargo, novoEmail, idUsuario);
    var instrucao = `
        UPDATE Usuario SET nome='${novoNome}', fk_cargo = '${novoCargo}', email = '${novoEmail}' WHERE id_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarLoja(novoNome, novoTelefone, novoCNPJ, idLoja) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editarLoja(): ", novoNome, novoTelefone, novoCNPJ, idLoja);
    var instrucao = `
        UPDATE Loja SET nome='${novoNome}', telefone = '${novoTelefone}', cnpj = '${novoCNPJ}' WHERE id_loja = ${idLoja};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    editarUsuario,
    editarLoja
}