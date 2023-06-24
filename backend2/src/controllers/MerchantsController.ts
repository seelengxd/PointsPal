import { RequestHandler } from "express";
import { Merchant } from "../models/merchant";
import { Discount } from "../models/discount";

export const index: RequestHandler = async (req, res) => {
  const merchants = await Merchant.findAll({ include: Discount });
  res.json(merchants);
};

export const show: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const merchants = await Merchant.findByPk(id, { include: Discount });
  res.json(merchants);
};
