import { RequestHandler } from "express";
import { Merchant } from "../models/merchant";
import { Discount } from "../models/discount";
import passport from "passport";
import { Subscription } from "../models/subscription";
import { sequelize } from "../configs/database";

export const index: RequestHandler[] = [
  passport.authenticate("custom", { failWithError: true }),
  async (req, res) => {
    const userSub = req.user.sub as string;
    const merchants = await Merchant.findAll({
      attributes: {
        include: [
          [
            sequelize.literal(
              `(SELECT COUNT(*) > 0 FROM subscriptions WHERE subscriptions."merchantId" = merchant.id AND subscriptions."userSub" = '${userSub}')`
            ),
            "is_subscribed",
          ],
        ],
      },
      include: [{ model: Discount, required: true }],
    });
    res.json(merchants.map((merchant) => merchant.toJSON()));
  },
];

export const show: RequestHandler[] = [
  passport.authenticate("custom", { failWithError: true }),
  async (req, res) => {
    const id = req.params.id;
    const userSub = req.user.sub as string;
    const merchant = await Merchant.findByPk(id, {
      attributes: {
        include: [
          [
            sequelize.literal(
              `(SELECT COUNT(*) > 0 FROM subscriptions WHERE subscriptions."merchantId" = merchant.id AND subscriptions."userSub" = '${userSub}')`
            ),
            "is_subscribed",
          ],
        ],
      },
      include: Discount,
    });
    if (!merchant) {
      res.sendStatus(404);
      return;
    }
    res.json(merchant.toJSON());
  },
];

export const toggleSubscription: RequestHandler[] = [
  passport.authenticate("custom", { failWithError: true }),
  async (req, res) => {
    const merchantId = req.params.id;
    const userSub = req.user.sub as string;

    // Subscribe if not already subscribed.
    const [subscription, created] = await Subscription.findOrCreate({
      where: {
        merchantId,
        userSub,
      },
    });

    // Unsubscribe if already subscribed.
    if (!created) {
      await subscription.destroy();
    }
  },
];
