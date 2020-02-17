const express = require("express");
const routes = require("./routes");

const server = express();

server.use(express.json());

server.use((req, res, next) => {
  console.time('request')
  console.log(`Método: ${req.method}; Url: ${req.url}`);

  next();

  console.log("finalizou")
  console.timeEnd('request')
});

server.use(routes);

//Query params = ?user=1
//Route params = /user/1
//Request body = { "user": "Matheus", "email": "matheus@gmail.com" }

//CRUD - Create, Ready, Update, Delete

server.listen(3000);
