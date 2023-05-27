var database = require("../database/config");

function buscarUltimasMedidas(idComponente, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idComponente}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idComponente) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idComponente} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente=1;  `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIdMaquina() {
    instrucaoSql = ''

    nome = req.NOME_USUARIO

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select 
                            [dbo].[maquina].id_Maquina
                        from [dbo].[maquina]
                        join [dbo].[loja] on
                        [dbo].[loja].id_loja = [dbo].[maquina].fk_loja
                        where [dbo].[loja].id_loja = [dbo].[maquina].fk_loja;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select memoriaDisponivel from MetricaMemoria where fkComponente = 1; `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
