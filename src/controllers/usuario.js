module.exports = (app) => {
    app.get("/usuario", function (req, res) {
      res.send(
        "Rastreamento da aplicação sendo feito com nodemon"
      );
    });
    app.post("/usuario", function (req, res) {
      res.send(
        "Rota POST de usuario ativada: usuário adicionado ao banco de dados"
      );
    });
  };
  