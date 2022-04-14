const express = require("express");
const app = express();

const usuario = require("./controllers/usuario");
const tarefas = require("./controllers/tarefas");
usuario(app);
tarefas(app);

app.listen(3000, () => console.log("FOI"));