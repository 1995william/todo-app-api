import Usuario from "../models/usuario.js";
import db from "../infra/db.js";

const usuarioController = (app) => {
  app.get("/usuario", (req, res) => {
    res.status(200).json(db.usuario);
  });

  app.get("/usuario/:email", (req, res) => {
    const email = Usuario.buscaEmail(req.params.email);
    res.status(200).json(db.usuario[email]);
  });

  app.post("/usuario", (req, res) => {
    res.status(201);
    const body = req.body;
    const usuario = new Usuario(body.nome, body.email, body.senha);
    db.usuario.push(usuario);
    res.json({ "Usuário cadastrado": usuario });
  });

  app.delete("/usuario/:email", (req, res) => {
    const email = req.params.email;
    Usuario.deletaUsuario(email);

    res.json({ mensagem: `${email} deletado` });
  });
};

export default usuarioController;
