module.exports = (app) => {
    app.get("/tarefa", function (req, res) {
      
      res.send("Rota ativada com GET e recurso tarefas valores de tarefas devem ser retornados");
    });
    app.post("/tarefa", function (req, res) {
      res.send(
        "Rota POST de tarefa ativada: usuário adicionado ao banco de dados"
      );
    });
  };