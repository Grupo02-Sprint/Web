var database = require("../database/config");

function buscarMaquinas(idLoja) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
                            maquina.id_maquina,
                            ideal.limite_toleravel,
                            ideal.limiteAtencao
                        FROM maquina 
                        JOIN loja ON
                        loja.id_loja = maquina.fk_loja
                        JOIN ideal ON
                        loja.id_loja = ideal.fk_loja
                        WHERE maquina.fk_loja = ${idLoja} AND
                        ideal.fk_componente = 1`;
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

async function buscarUltimasMedidas(id_maquina, tipoGrafico, limite_linhas) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        if (tipoGrafico == 'rede') {
            instrucaoSql = `SELECT DISTINCT TOP ${limite_linhas}
                                    rede.idRede,
                                    FORMAT(rede.dt_hora, 'HH:mm:ss') as dt_hora,
                                    rede.bytes_recebidos,
                                    rede.bytes_enviados
                                FROM rede
                                JOIN maquina ON
                                    maquina.id_maquina = rede.fk_maquina
                                WHERE 
                                    rede.fk_maquina = ${id_maquina}
                                ORDER BY
                                    rede.idRede
                                DESC`;
        } else {
            instrucaoSql = `SELECT DISTINCT TOP ${limite_linhas}
                                metrica.id_metrica, 
                                metrica.captura,
                                FORMAT(metrica.dt_hora_captura, 'HH:mm:ss') as dt_hora, 
                                componente.tipo, 
                                especificacao.capacidade, 
                                unidadeMedida.tipo_unidade
                            FROM metrica
                            JOIN maquina ON 
                                maquina.id_maquina = metrica.fk_maquina
                            JOIN componente ON 
                                componente.idComponente = metrica.fk_componente
                            JOIN especificacao ON 
                                especificacao.fk_componente = componente.idComponente
                            JOIN unidadeMedida ON 
                                unidadeMedida.id = componente.fk_unidade_medida
                            WHERE 
                            	metrica.fk_maquina = ${id_maquina} AND
                                componente.tipo = '${tipoGrafico}' AND
								especificacao.capacidade != 0
                            ORDER BY
                                metrica.id_metrica
                            DESC`;

        }
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    try {
        resultado = await database.executar(instrucaoSql);

        return resultado
    } catch (erro) {
        throw erro
    }

}

function buscarMedidasEmTempoReal(id_maquina, tipoGrafico) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        if (tipoGrafico == 'rede') {
            instrucaoSql = `SELECT DISTINCT TOP 1
                                    rede.idRede,
                                    FORMAT(rede.dt_hora, 'HH:mm:ss') as dt_hora,
                                    rede.bytes_recebidos,
                                    rede.bytes_enviados
                                FROM rede
                                JOIN maquina ON
                                    maquina.id_maquina = rede.fk_maquina
                                WHERE 
                                    rede.fk_maquina = ${id_maquina}
                                ORDER BY
                                    rede.idRede
                                DESC`;
        } else {
            instrucaoSql = `SELECT DISTINCT TOP 1
                                metrica.id_metrica, 
                                metrica.captura,
                                FORMAT(metrica.dt_hora_captura, 'HH:mm:ss') as dt_hora, 
                                componente.tipo, 
                                especificacao.capacidade, 
                                unidadeMedida.tipo_unidade
                            FROM metrica
                            JOIN maquina ON 
                                maquina.id_maquina = metrica.fk_maquina
                            JOIN componente ON 
                                componente.idComponente = metrica.fk_componente
                            JOIN especificacao ON 
                                especificacao.fk_componente = componente.idComponente
                            JOIN unidadeMedida ON 
                                unidadeMedida.id = componente.fk_unidade_medida
                            WHERE 
                            	metrica.fk_maquina = ${id_maquina} AND
                                componente.tipo = '${tipoGrafico}' AND
								especificacao.capacidade != 0
                            ORDER BY
                                metrica.id_metrica
                            DESC`;

        }

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    try {
        resultado = database.executar(instrucaoSql);

        return resultado
    } catch (erro) {
        throw erro
    }

}

module.exports = {
    buscarMaquinas,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
