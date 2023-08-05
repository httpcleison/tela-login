let contas = require("./contas");

const autenticar = (email, pass, callback) => {
    let autenticado = false
    contas.forEach((conta) => {
        if (conta.email == email && conta.pass == pass) {
            autenticado = true
            callback(true);
            return;
        }

        callback(false)
    });
}


module.exports = autenticar;