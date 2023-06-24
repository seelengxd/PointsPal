import { readFileSync } from "fs";
import { Session } from "../models/session";
import model from "../models/associations";
const { Discount, Merchant, Subscription, User } = model;

const models = [Subscription, Discount, Merchant, User, Session];

models.forEach((model) => model.destroy({ where: {}, force: true }));

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const data = JSON.parse(
  readFileSync("src/utils/data.json", { encoding: "utf8" })
) as Record<string, string>;

(async () => {
  for (const [merchantName, image] of Object.entries(data)) {
    const merchant = await Merchant.create({
      name: merchantName,
      type: getRandomInt(1, 2),
      image,
    });

    for (let i = 1; i < 3; i++) {
      const discount = await Discount.create({
        title: `Title ${i} of merchant`,
        description: "some description",
        code: [...Array(7)].map(() => Math.random().toString(36)[2]).join(""),
      });
      await merchant.addDiscount(discount);
    }
  }
})();
