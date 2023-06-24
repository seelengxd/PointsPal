import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import open from "open";
import morgan from "morgan";
import apiRouter from "./routes";
import session from "express-session";
import passport from "passport";
import passportCustom from "passport-custom";
import {
  PORT,
  SESSION_COOKIE_NAME,
  SGID_FRONTEND_HOST,
  sgid,
} from "./configs/constants";
import { Session } from "./models/session";
import { User } from "./models/user";

import "./models/associations";

const CustomStrategy = passportCustom.Strategy;
const app = express();

app.use(
  cors({
    credentials: true,
    origin: SGID_FRONTEND_HOST,
  })
);

passport.use(
  new CustomStrategy(async function (req, callback) {
    // custom logic here
    // parse cookie
    // Retrieve the session ID
    const sessionId = String(req.cookies[SESSION_COOKIE_NAME]);

    // Retrieve the access token and sub
    const session = await Session.findByPk(sessionId);
    const accessToken = session?.accessToken;
    const sub = session?.sub;

    // if fail, error here
    if (
      session === undefined ||
      accessToken === undefined ||
      sub === undefined
    ) {
      console.log({ session, accessToken, sub });
      callback(null, false);
      return;
    }
    // get user
    const [user, created] = await User.findOrCreate({ where: { sub } });
    if (created) {
      console.log({ accessToken, sub, sgid });
      const userinfo = await sgid.userinfo({
        accessToken,
        sub,
      });
      user.name = userinfo.data["myinfo.name"];
      await user.save();
    }
    callback(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, (user as User).sub);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findByPk(id as string);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

const initServer = async (): Promise<void> => {
  try {
    app.use(morgan("tiny"));
    app.use(cookieParser());

    // for auth
    app.use(
      session({ secret: "cats", resave: false, saveUninitialized: true })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.urlencoded({ extended: false }));

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
