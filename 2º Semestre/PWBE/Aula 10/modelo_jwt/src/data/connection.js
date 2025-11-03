const connection = require("mysql2/promise");

const pool = connection.createPool({
  host: process.env.DATABASE_URL, //Importanto do .env
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

module.exports = pool;