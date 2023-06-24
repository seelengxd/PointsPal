import { DataTypes, HasManyAddAssociationMixin, Model } from "sequelize";
import { sequelize } from "../configs/database";
import { Discount } from "./discount";

export class Merchant extends Model {
  declare name: string;
  declare type: number;
  declare image: string;

  declare addDiscount: HasManyAddAssociationMixin<Discount, number>;
  declare createDiscount: HasManyAddAssociationMixin<Discount, "merchantId">;
}

Merchant.init(
  {
    name: { type: DataTypes.STRING },
    type: { type: DataTypes.INTEGER },
    image: { type: DataTypes.TEXT },
  },
  { sequelize, modelName: "merchant" }
);
