import { RequestHandler } from "express";
import { Merchant } from "../models/merchant";
import { Discount } from "../models/discount";
import passport from "passport";

export const index: RequestHandler[] = [
  passport.authenticate("custom", { failWithError: true }),
  async (req, res) => {
    const merchants = await Merchant.findAll({ include: Discount });
    res.json(merchants.map((merchant) => merchant.toJSON()));
  },
];

export const show: RequestHandler[] = [
  passport.authenticate("custom", { failWithError: true }),
  async (req, res) => {
    const id = req.params.id;
    const merchant = await Merchant.findByPk(id, { include: Discount });
    if (!merchant) {
      res.sendStatus(404);
      return;
    }
    res.json(merchant.toJSON());
  },
];
