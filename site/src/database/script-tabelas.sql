-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/*
 comandos para mysql - banco local - ambiente de desenvolvimento
 */
CREATE TABLE usuario (
	id INT PRIMARY KEY auto_increment,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);
/*
 comandos para criar usuário em banco de dados azure, sqlserver,
 com permissão de insert + update + delete + select
 */
CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader] WITH PASSWORD = '#Gfgrupo2',
DEFAULT_SCHEMA = dbo;
EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
/*
 Comandos para mysql - Azure - ambiente produção
 */
CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1, 1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);