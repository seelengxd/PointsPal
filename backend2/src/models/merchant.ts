import { DataTypes, Model } from "sequelize";
import { sequelize } from "../configs/database";

export class Merchant extends Model {
  declare name: string;
  declare type: number;
  declare image: string;
}

Merchant.init(
  {
    name: { type: DataTypes.STRING },
    type: { type: DataTypes.INTEGER },
    image: { type: DataTypes.TEXT },
  },
  { sequelize, modelName: "merchant" }
);
