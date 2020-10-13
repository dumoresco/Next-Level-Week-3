import express from "express";
import { getRepository } from "typeorm";
import Orphanage from "./models/Orphanage";
import "./database/connection";

const app = express();

app.use(express.json());

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

app.post("/orphanages", async (req, res) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = req.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  return res.json({ message: "hello" });
});

app.listen(3333);

// Driver nativo, query builder, ORM
