import SgidClient from "@opengovsg/sgid-client";
import * as dotenv from "dotenv";

dotenv.config();

export const SGID_FRONTEND_HOST = process.env.SGID_FRONTEND_HOST;
export const PORT = 5001;

export const SGID_CLIENT_ID = String(process.env.SGID_CLIENT_ID);
export const SGID_CLIENT_SECRET = String(process.env.SGID_CLIENT_SECRET);
export const SGID_PRIVATE_KEY = String(process.env.SGID_PRIVATE_KEY);

export const SESSION_COOKIE_NAME = "exampleAppSession";

export const POSTGRES_USER = String(process.env.POSTGRES_USER);
export const POSTGRES_PASS = String(process.env.POSTGRES_PASS);
export const POSTGRES_HOST = String(process.env.POSTGRES_HOST);
export const POSTGRES_DBNAME = String(process.env.POSTGRES_DBNAME);

export const sgid = new SgidClient({
  clientId: SGID_CLIENT_ID,
  clientSecret: SGID_CLIENT_SECRET,
  privateKey: SGID_PRIVATE_KEY,
  redirectUri: `http://localhost:${PORT}/api/redirect`,
});
