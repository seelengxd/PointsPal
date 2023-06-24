import { Sequelize } from "sequelize";
import {
  POSTGRES_DBNAME,
  POSTGRES_HOST,
  POSTGRES_PASS,
  POSTGRES_USER,
} from "./constants";

export const sequelize = new Sequelize(
  `postgres://${POSTGRES_USER}:${POSTGRES_PASS}@${POSTGRES_HOST}/${POSTGRES_DBNAME}`
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();
