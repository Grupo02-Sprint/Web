var database = require("../database/config");

function cadastrar(patrimonio, idLoja) {
    console.log("ACESSEI O MAQUINA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ", patrimonio, idLoja);
    var instrucao = `
        INSERT INTO maquina (patrimonio, fkLoja) VALUES ('${patrimonio}', ${idLoja});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(fkLoja) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", fkLoja);
    var instrucao = `
        SELECT idMaquina, patrimonio FROM maquina where fkLoja = ${fkLoja};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novoPatrimonio, idMaquina, idLoja) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novoPatrimonio, idMaquina, idLoja);
    var instrucao = `
        UPDATE maquina SET patrimonio = '${novoPatrimonio}' WHERE idMaquina = ${idMaquina} and fkLoja = ${idLoja};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idMaquina, idLoja) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idMaquina, idLoja);
    var instrucao = `
        DELETE FROM maquina WHERE idMaquina = ${idMaquina} and fkLoja =${idLoja};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    editar,
    deletar
}