var database = require("../database/config");

function buscarMaquinas(id_loja) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select 
                            id_maquina 
                        from maquina 
                        join loja on 
                            id_loja = fk_loja
                        where fk_loja = ${id_loja}`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select id_maquina from maquina join loja on id_loja = fk_loja;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a query: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then(function (resultado) {
            return resultado;
        });
}

function buscarUltimasMedidas(idLoja, limite_linhas) {
    // idmaquina, tipocomponente, capacidadeEspecificacao, captura
    instrucaoSql = 'select * from [dbo].[maquina] join [dbo].[especificacao] on id_maquina = fk_maquina join [dbo].[metrica] on id_maquina = fk_maquina'

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                                maquina.id_maquina, maquina.fk_loja, 
                                metrica.captura, metrica.dt_hora_captura, 
                                componente.tipo, especificacao.capacidade, 
                                unidadeMedida.tipo_unidade
                        FROM maquina
                        JOIN metrica ON 
                            maquina.id_maquina = metrica.fk_maquina
                        JOIN componente ON 
                             componente.idComponente = metrica.fk_componente
                        JOIN especificacao ON 
                             especificacao.idComponente = componente.fk_componente
                        JOIN unidadeMedida ON 
                            unidadeMedida.id = especificacao.fk_unidade_medida
                        WHERE 
                            maquina.fk_loja = ${idLoja}`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idLoja) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1 
                                maquina.id_maquina, 
                                maquina.fk_loja, 
                                metrica.captura, 
                                metrica.dt_hora_captura, 
                                componente.tipo, 
                                especificacao.capacidade, 
                                unidadeMedida.tipo_unidade, 
                                rede.bytes_recebidos, 
                                rede.bytes_enviados 
                        FROM maquina 
                        JOIN rede ON 
                            maquina.id_maquina = rede.fk_maquina 
                        JOIN metrica ON 
                            maquina.id_maquina = metrica.fk_maquina 
                        JOIN componente ON 
                            componente.idComponente = metrica.fk_componente 
                        JOIN especificacao ON 
                            especificacao.idComponente = componente.fk_componente 
                        JOIN unidadeMedida ON 
                            unidadeMedida.id = especificacao.fk_unidade_medida 
                        WHERE 
                            maquina.fk_loja = ${idLoja}`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMaquinas,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
