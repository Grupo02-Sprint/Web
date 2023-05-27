var database = require("../database/config");

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, telefone, cnpj) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, telefone, cnpj);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO loja (nome, telefone, cnpj) VALUES ('${nome}', '${telefone}', '${cnpj}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarPorCnpj(cnpj){
    var instrucao = `select idLoja from loja where cnpj = '${cnpj}'`;

    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    buscarPorCnpj
};