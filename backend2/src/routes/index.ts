import { Router } from "express";
import sgidRouter from "./sgid";
import merchantsRouter from "./merchants";

const apiRouter = Router();

apiRouter.use("/", sgidRouter);
apiRouter.use("/merchants", merchantsRouter);

export default apiRouter;
