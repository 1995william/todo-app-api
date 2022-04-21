import express from "express";
import usuarioController from "./controllers/usuarios-controllers.js";
import tarefaController from "./controllers/tarefas-controllers.js";

const app = express();

app.use(express.json());

usuarioController(app);
tarefaController(app);

export default app;