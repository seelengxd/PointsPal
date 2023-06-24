import { DataTypes, Model } from "sequelize";
import { sequelize } from "../configs/database";

export class Session extends Model {
  declare id: string;
  declare nonce?: string;
  declare accessToken?: string;
  declare codeVerifier?: string;
  declare sub?: string;
}

Session.init(
  {
    id: { type: DataTypes.STRING, primaryKey: true },
    nonce: { type: DataTypes.STRING },
    accessToken: { type: DataTypes.STRING },
    codeVerifier: { type: DataTypes.STRING },
    sub: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: "session",
  }
);

Session.sync();
