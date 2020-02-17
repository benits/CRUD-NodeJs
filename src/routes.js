const express = require("express");
const UserController = require("./Controllers/UserController");

const routes = express.Router();

routes.get("/users/", UserController.index);

routes.get("/user/id/:id", UserController.indexById);

routes.post("/user/", UserController.checkUserExists, UserController.create);

routes.put("/user/:index", UserController.checkUserExists, UserController.update);

routes.delete("/user/:id", UserController.delete);

module.exports = routes;
