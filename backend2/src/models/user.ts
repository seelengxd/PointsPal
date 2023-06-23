import { DataTypes, Model } from "sequelize";
import { sequelize } from "../configs/database";

export class User extends Model {
  declare sub: string;
  declare name: string;
}

User.init(
  {
    sub: { type: DataTypes.STRING, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "user" }
);

User.sync();
