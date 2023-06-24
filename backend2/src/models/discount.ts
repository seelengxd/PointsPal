import { DataTypes, Model } from "sequelize";
import { sequelize } from "../configs/database";

export class Discount extends Model {
  declare title: string;
  declare code: string;
  declare description: string;
}

Discount.init(
  {
    title: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: "discount",
  }
);
