const express = require('express');
const app = express();

function meuMiddleware(req, res, next) {
  // fazer algo com a solicitação
  console.log('Middleware executado');
  // chamar a próxima função na pilha de execução
  next();
}

// usar o middleware em uma rota
app.get('/', meuMiddleware, function (req, res) {
  // controlador final
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Aplicativo ouvindo na porta 3000!');
});
