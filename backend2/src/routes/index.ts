import { Router } from "express";
import sgidRouter from "./sgid";

const apiRouter = Router();

apiRouter.use("/", sgidRouter);

export default apiRouter;
