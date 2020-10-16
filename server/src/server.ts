import express from "express";
import "express-async-errors";

import "./database/connection";

import routes from "./route";

import path from "path";

import cors from "cors";

import errorHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

//Rota = conjunto

//Recurso = usuário

//Métodos HTTP = GET, POST, PUT, DELETE

//GET = Buscar uma informação
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

//Parâmetros

//  Query Params: htpp://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/2
// Body: http://localhost:3333/users

app.listen(3333);

// Driver nativo, query builder, ORM
