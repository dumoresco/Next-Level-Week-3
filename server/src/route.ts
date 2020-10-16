import { Router } from "express";
import multer from "multer";
import OrphanagesController from "./controllers/OrphanagesControllers";
import uploadConfig from "./config/upload";

const route = Router();

//MVC
// Model
// Views
// Controllers
const upload = multer(uploadConfig);

route.get("/orphanages", OrphanagesController.index);
route.get("/orphanages/:id", OrphanagesController.show);
route.post("/orphanages", upload.array("images"), OrphanagesController.create);

export default route;
