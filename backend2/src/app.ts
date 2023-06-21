import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import open from "open";
import morgan from "morgan";
import apiRouter from "./routes";
import { PORT, SGID_FRONTEND_HOST } from "./configs/constants";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: SGID_FRONTEND_HOST,
  })
);

const initServer = async (): Promise<void> => {
  try {
    app.use(morgan("tiny"));
    app.use(cookieParser());
    app.use("/api", apiRouter);

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
      void open(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(
      "Something went wrong while starting the server. Please restart the server."
    );
    console.error(error);
  }
};

void initServer();
