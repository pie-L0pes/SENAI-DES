const mysql = require("mysql2/promise");

const con = mysql.createPool({
    host : "localhost",
    user: "root",
    password: "",
    database: "teste"
});

module.exports = con;