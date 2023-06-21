import SgidClient, { generatePkcePair } from "@opengovsg/sgid-client";
import { Router } from "express";
import crypto from "crypto";
import {
  PORT,
  SGID_CLIENT_ID,
  SGID_CLIENT_SECRET,
  SGID_FRONTEND_HOST,
  SGID_PRIVATE_KEY,
} from "../configs/constants";
import { Session } from "../models/session";

const SESSION_COOKIE_NAME = "exampleAppSession";
const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
};

const sgid = new SgidClient({
  clientId: SGID_CLIENT_ID,
  clientSecret: SGID_CLIENT_SECRET,
  privateKey: SGID_PRIVATE_KEY,
  redirectUri: `http://localhost:${PORT}/api/redirect`,
});

const sgidRouter = Router();

sgidRouter.get("/auth-url", (req, res) => {
  // Generate a session ID
  const sessionId = crypto.randomUUID();

  // Generate a PKCE pair
  const { codeChallenge, codeVerifier } = generatePkcePair();

  // Generate an authorization URL
  const { url, nonce } = sgid.authorizationUrl({
    codeChallenge,
    // Scopes that all sgID relying parties can access by default
    scope: ["openid", "myinfo.name"],
  });

  // Store code verifier and nonce
  Session.findOrCreate({ where: { id: sessionId } })
    .then(([session, _]) => {
      session.set({ nonce, codeVerifier });
      session.save();
    })
    .then(
      // Return the authorization URL
      () =>
        res
          .cookie(SESSION_COOKIE_NAME, sessionId, SESSION_COOKIE_OPTIONS)
          .json({ url })
    );
});

sgidRouter.get("/redirect", async (req, res): Promise<void> => {
  // Retrieve the authorization code and session ID
  const authCode = String(req.query.code);
  const sessionId = String(req.cookies[SESSION_COOKIE_NAME]);

  // Retrieve the code verifier from memory
  const session = await Session.findByPk(sessionId);

  if (!session) {
    res.sendStatus(401);
    return;
  }

  // Validate that the code verifier exists for this session
  if (!session?.codeVerifier) {
    res.redirect(`${SGID_FRONTEND_HOST}/error`);
    return;
  }

  // Exchange the authorization code and code verifier for the access token
  const { accessToken, sub } = await sgid.callback({
    code: authCode,
    nonce: session.nonce,
    codeVerifier: session.codeVerifier,
  });

  // Store the access token and sub in session
  session.accessToken = accessToken;
  session.sub = sub;

  // Successful login, redirect to logged in state
  session.save().then(() => res.redirect(`${SGID_FRONTEND_HOST}/merchants`));
});

sgidRouter.get("/userinfo", async (req, res) => {
  // Retrieve the session ID
  const sessionId = String(req.cookies[SESSION_COOKIE_NAME]);

  // Retrieve the access token and sub
  const session = await Session.findByPk(sessionId);
  const accessToken = session?.accessToken;
  const sub = session?.sub;

  // User is not authenticated
  if (session === undefined || accessToken === undefined || sub === undefined) {
    return res.sendStatus(401);
  }

  // Request user info using the access token
  const userinfo = await sgid.userinfo({
    accessToken,
    sub,
  });

  // Return the user info
  return res.json(userinfo);
});

export default sgidRouter;
