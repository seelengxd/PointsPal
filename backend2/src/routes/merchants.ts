import { Router } from "express";
import {
  index,
  show,
  toggleSubscription,
} from "../controllers/MerchantsController";

const merchantsRouter = Router();

merchantsRouter.get("/", index);
merchantsRouter.get("/:id", show);
merchantsRouter.get("/:id/toggleSubscription", toggleSubscription);

export default merchantsRouter;
