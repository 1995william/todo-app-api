import db from "../infra/db.js";

class Usuario {
    constructor (nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    static buscaEmail(email) {
        return db.usuario.findIndex(el => el.email == email);
    }
    static deletaUsuario(email) {
       const findEmail = db.usuario.findIndex(el => el.email == email)
       return db.usuario.splice(findEmail,1)
    }
}
export default Usuario;