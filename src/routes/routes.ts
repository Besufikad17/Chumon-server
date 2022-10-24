import { Router } from "express";
import { AnimeController } from "../controllers/animeController";
import { RequestController } from "../controllers/requestController";

const animeController = new AnimeController();
const requestController = new RequestController();
const route = Router();

route.get('/order/:title', animeController.getOrder);
route.post('/add', animeController.addOrder);
route.post('/request/:title', requestController.addRequest);
route.get('/all_requests', requestController.getRequests);
route.get('/requests/:status', requestController.getRequestByStatus);

export { route }