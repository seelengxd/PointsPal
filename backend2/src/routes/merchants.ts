import { Router } from "express";
import { index, show } from "../controllers/MerchantsController";

const merchantsRouter = Router();

merchantsRouter.get("/", index);
merchantsRouter.get("/:id", show);

export default merchantsRouter;
