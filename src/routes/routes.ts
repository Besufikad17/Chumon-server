import { Router } from "express";
import { AnimeController } from "../controllers/animeController";

const animeController = new AnimeController();
const route = Router();

route.get('/order/:title', animeController.getOrder);
route.post('/add', animeController.addOrder);

export { route }