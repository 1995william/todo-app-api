import Tarefa from "../models/tarefa.js";
import db from "../infra/db.js";

const tarefaController = (app) => {
  app.get("/tarefa", (req, res) => {
    res.status(200).json(db.tarefa);
  });

  app.post("/tarefa", (req, res) => {
    res.status(201);
    const body = req.body;
    const tarefa = new Tarefa(body.titulo, body.descricao, body.status, body.data);

    db.tarefa.push(tarefa);
    res.json({ novaTarefa: tarefa });
  });
};

export default tarefaController;
