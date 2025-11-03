require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const adminroutes = require("./src/routes/administrador.routes");
const loginroutes = require("./src/routes/login.routes");

app.use(express.json());
app.use(cors());

app.use(adminroutes);
app.use(loginroutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
})