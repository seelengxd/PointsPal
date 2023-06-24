import { Model } from "sequelize";
import { sequelize } from "../configs/database";

export class Subscription extends Model {
  declare merchantId: string;
  declare userSub: string;
}

Subscription.init(
  {},
  {
    sequelize,
    modelName: "subscription",
  }
);
