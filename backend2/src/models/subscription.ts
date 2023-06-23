import { Model } from "sequelize";
import { sequelize } from "../configs/database";

export class Subscription extends Model {}

Subscription.init(
  {},
  {
    sequelize,
    modelName: "subscription",
  }
);
