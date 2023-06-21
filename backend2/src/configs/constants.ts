import SgidClient from "@opengovsg/sgid-client";
import * as dotenv from "dotenv";

dotenv.config();

export const SGID_FRONTEND_HOST = process.env.SGID_FRONTEND_HOST;
export const PORT = 5001;

export const SGID_CLIENT_ID = String(process.env.SGID_CLIENT_ID);
export const SGID_CLIENT_SECRET = String(process.env.SGID_CLIENT_SECRET);
export const SGID_PRIVATE_KEY = String(process.env.SGID_PRIVATE_KEY);
