var database = require("../database/config");

function cadastrar(nome, cargo, idUsuario, email, idLoja, senha) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ", nome, cargo, idUsuario, email, idLoja, senha);
    var instrucao = `
        INSERT INTO usuario (nome, fkCargo, email, fkLoja, senha) VALUES ('${nome}', '${cargo}', '${email}', '${idLoja}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(fkLoja) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()",fkLoja);
    var instrucao = `
    SELECT u.idUsuario, u.nome, c.nomeCargo, u.email FROM Usuario as u inner join cargo as c on u.fkCargo=c.idcargo  where fkLoja ='${fkLoja} order by idUsuario desc' ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idUsuario);
    var instrucao = `
        DELETE FROM Usuario WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novoCargo, novoEmail, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novoCargo, novoEmail, idUsuario);
    var instrucao = `
        UPDATE usuario SET fkCargo = '${novoCargo}', email = '${novoEmail}' WHERE idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarPorUsuario(idUsuario){
    var instrucao = `select fkLoja from Usuario where idUsuario = '${idUsuario}'`;

    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    deletar,
    editar,
    buscarPorUsuario
}