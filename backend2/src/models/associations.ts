import { Discount } from "./discount";
import { Merchant } from "./merchant";
import { Subscription } from "./subscription";
import { User } from "./user";

Merchant.hasMany(Discount);
Discount.belongsTo(Merchant);

Merchant.belongsToMany(User, { through: Subscription });
User.belongsToMany(Merchant, { through: Subscription });

Merchant.sync({ alter: true });
Discount.sync({ alter: true });
User.sync({ alter: true });
Subscription.sync({ alter: true });
