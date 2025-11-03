//connection -> acessa os dados do banco

const mysql2 = require('mysql2/promise');

//Cria uma conexão
const connection = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "locadora"
});

module.exports =  connection;

/*
host -> endereço do banco de dados
user -> Usuario do banco de dados
password -> senha do usuario
database -> Base de dados 
*/