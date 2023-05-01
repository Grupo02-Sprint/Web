var database = require("../database/config");

function cadastrar(nome, cargo, idUsuario) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ", nome, cargo, idUsuario);
    var instrucao = `
        INSERT INTO aviso (titulo, descricao, fk_usuario) VALUES ('${nome}', '${cargo}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
}