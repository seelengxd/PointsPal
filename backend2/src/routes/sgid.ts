import { Router } from "express";
import {
  getAuthUrl,
  getUserInfo,
  redirect,
} from "../controllers/SgidController";

const sgidRouter = Router();

sgidRouter.get("/auth-url", getAuthUrl);
sgidRouter.get("/redirect", redirect);
sgidRouter.get("/userinfo", getUserInfo);

export default sgidRouter;
