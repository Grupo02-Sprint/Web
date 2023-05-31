var database = require("../database/config");

function buscarMaquinas(idLoja) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select 
                            id_maquina 
                        from maquina 
                        where fk_loja = ${idLoja}`;
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

async function buscarUltimasMedidasCpu(id_maquina, limite_linhas) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select distinct top ${limite_linhas}
                                maquina.id_maquina, 
                                metrica.captura,
                                FORMAT(metrica.dt_hora_captura, 'HH:mm:ss') as dt_hora, 
                                componente.tipo, 
                                especificacao.capacidade, 
                                unidadeMedida.tipo_unidade
                        FROM maquina
                        JOIN metrica ON 
                            maquina.id_maquina = metrica.fk_maquina
                        JOIN componente ON 
                            componente.idComponente = metrica.fk_componente
                        JOIN especificacao ON 
                            especificacao.fk_componente = componente.idComponente
                        JOIN unidadeMedida ON 
                            unidadeMedida.id = componente.fk_unidade_medida
                        WHERE 
                            maquina.id_maquina = ${id_maquina} AND
                            componente.tipo = 'cpu'
                        ORDER BY
                            dt_hora`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    try {
        resultadoCpu = await database.executar(instrucaoSql);
        console.log("resultados CPU" + resultadoCpu);

        return resultadoCpu
    } catch (erro) {
        throw erro
    }

}

async function buscarUltimasMedidasDisco(id_maquina, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select distinct top ${limite_linhas}
                                maquina.id_maquina, 
                                metrica.captura,
                                FORMAT(metrica.dt_hora_captura, 'HH:mm:ss') as dt_hora, 
                                componente.tipo, 
                                especificacao.capacidade, 
                                unidadeMedida.tipo_unidade
                        FROM maquina
                        JOIN metrica ON 
                            maquina.id_maquina = metrica.fk_maquina
                        JOIN componente ON 
                            componente.idComponente = metrica.fk_componente
                        JOIN especificacao ON 
                            especificacao.fk_componente = componente.idComponente
                        JOIN unidadeMedida ON 
                            unidadeMedida.id = componente.fk_unidade_medida
                        WHERE 
                            maquina.id_maquina = ${id_maquina} AND
                            componente.tipo = 'disco'
                        ORDER BY 
                            dt_hora`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    try {
        resultadoDisco = await database.executar(instrucaoSql);
        console.log("resultados Disco" + resultadoDisco);

        return resultadoDisco
    } catch (erro) {
        throw erro
    }
}
async function buscarUltimasMedidasRam(id_maquina, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select distinct top ${limite_linhas}
                            maquina.id_maquina, 
                            maquina.fk_loja, 
                            metrica.captura,
                            FORMAT(metrica.dt_hora_captura, 'HH:mm:ss') as dt_hora, 
                            componente.tipo, 
                            especificacao.capacidade, 
                            unidadeMedida.tipo_unidade
                        FROM maquina
                        JOIN metrica ON 
                           maquina.id_maquina = metrica.fk_maquina
                        JOIN componente ON 
                            componente.idComponente = metrica.fk_componente
                        JOIN especificacao ON 
                            especificacao.fk_componente = componente.idComponente
                        JOIN unidadeMedida ON 
                            unidadeMedida.id = componente.fk_unidade_medida
                        WHERE 
                            maquina.id_maquina = ${id_maquina} AND
                            componente.tipo = 'Memoria RAM'
                        ORDER BY
                            dt_hora`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    try {
        resultadoRam = await database.executar(instrucaoSql);
        console.log("resultados Ram" + resultadoRam);

        return resultadoRam
    } catch (erro) {
        throw erro
    }
}
async function buscarUltimasMedidasRede(id_maquina, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select distinct top ${limite_linhas}
                                    maquina.id_maquina,
                                    rede.bytes_recebidos,
                                    rede.bytes_enviados,
                                    FORMAT(metrica.dt_hora_captura, 'HH:mm:ss') as dt_hora
                                from maquina
                                join rede on
                                    maquina.id_maquina = rede.fk_maquina
                                join metrica on
                                    maquina.id_maquina = metrica.fk_maquina
                                where 
                                    maquina.id_maquina = ${id_maquina}
                                ORDER BY
                                    dt_hora`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    try {
        resultadoRede = await database.executar(instrucaoSql);
        console.log("resultados Rede" + resultadoRede);

        return resultadoRede
    } catch (erro) {
        throw erro
    }
}

function buscarMedidasEmTempoRealCpu(id_maquina) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select distinct top 1
                                maquina.id_maquina, 
                                metrica.captura,
                                FORMAT(metrica.dt_hora_captura, 'HH:mm:ss') as dt_hora, 
                                componente.tipo, 
                                especificacao.capacidade, 
                                unidadeMedida.tipo_unidade
                        FROM maquina
                        JOIN metrica ON 
                            maquina.id_maquina = metrica.fk_maquina
                        JOIN componente ON 
                            componente.idComponente = metrica.fk_componente
                        JOIN especificacao ON 
                            especificacao.fk_componente = componente.idComponente
                        JOIN unidadeMedida ON 
                            unidadeMedida.id = componente.fk_unidade_medida
                        WHERE 
                            maquina.id_maquina = ${id_maquina} AND
                            componente.tipo = 'cpu'`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    try {
        resultado1Cpu = database.executar(instrucaoSql);

        return resultado1Cpu
    } catch (erro) {
        throw erro
    }

}

async function buscarMedidasEmTempoRealDisco(id_maquina) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select distinct top 1
                                maquina.id_maquina, 
                                metrica.captura,
                                FORMAT(metrica.dt_hora_captura, 'HH:mm:ss') as dt_hora, 
                                componente.tipo, 
                                especificacao.capacidade, 
                                unidadeMedida.tipo_unidade
                        FROM maquina
                        JOIN metrica ON 
                            maquina.id_maquina = metrica.fk_maquina
                        JOIN componente ON 
                            componente.idComponente = metrica.fk_componente
                        JOIN especificacao ON 
                            especificacao.fk_componente = componente.idComponente
                        JOIN unidadeMedida ON 
                            unidadeMedida.id = componente.fk_unidade_medida
                        WHERE 
                            maquina.id_maquina = ${id_maquina} AND
                            componente.tipo = 'disco'
                        ORDER BY 
                            dt_hora`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    try {
        resultado1Disco = await database.executar(instrucaoSql);
        console.log("resultado 1 Disco" + resultado1Disco);

        return resultado1Disco
    } catch (erro) {
        throw erro
    }
}
async function buscarMedidasEmTempoRealRam(id_maquina) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select distinct top 1
                            maquina.id_maquina, 
                            maquina.fk_loja, 
                            metrica.captura,
                            FORMAT(metrica.dt_hora_captura, 'HH:mm:ss') as dt_hora, 
                            componente.tipo, 
                            especificacao.capacidade, 
                            unidadeMedida.tipo_unidade
                        FROM maquina
                        JOIN metrica ON 
                           maquina.id_maquina = metrica.fk_maquina
                        JOIN componente ON 
                            componente.idComponente = metrica.fk_componente
                        JOIN especificacao ON 
                            especificacao.fk_componente = componente.idComponente
                        JOIN unidadeMedida ON 
                            unidadeMedida.id = componente.fk_unidade_medida
                        WHERE 
                            maquina.id_maquina = ${id_maquina} AND
                            componente.tipo = 'Memoria RAM'
                        ORDER BY
                            dt_hora`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    try {
        resultado1Ram = await database.executar(instrucaoSql);
        console.log("resultado 1 Ram" + resultado1Ram);

        return resultado1Ram
    } catch (erro) {
        throw erro
    }
}
async function buscarMedidasEmTempoRealRede(id_maquina) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select distinct top 1
                                    maquina.id_maquina,
                                    rede.bytes_recebidos,
                                    rede.bytes_enviados,
                                    FORMAT(metrica.dt_hora_captura, 'HH:mm:ss') as dt_hora
                                from maquina
                                join rede on
                                    maquina.id_maquina = rede.fk_maquina
                                join metrica on
                                    maquina.id_maquina = metrica.fk_maquina
                                where 
                                    maquina.id_maquina = ${id_maquina}
                                ORDER BY
                                    dt_hora`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    try {
        resultado1Rede = await database.executar(instrucaoSql);
        console.log("resultado 1 Rede" + resultado1Rede);

        return resultado1Rede
    } catch (erro) {
        throw erro
    }
}


module.exports = {
    buscarMaquinas,
    buscarUltimasMedidasCpu,
    buscarUltimasMedidasDisco,
    buscarUltimasMedidasRam,
    buscarUltimasMedidasRede,
    buscarMedidasEmTempoRealCpu,
    buscarMedidasEmTempoRealDisco,
    buscarMedidasEmTempoRealRam,
    buscarMedidasEmTempoRealRede
}
