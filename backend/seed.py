from models import Merchant, Discount
import random
import string

# Seed with 5 merchants and 2 discounts each
Discount.delete().execute()
Merchant.delete().execute()
for i in range(5):
    merchant = Merchant(name=f"Merchant {i}", type=random.randint(1, 2))
    merchant.save()

    for j in range(1, 3):
        discount = Discount.create(merchant=merchant, title=f"Title {j} of Merchant {i}", code="".join(
            [random.choice(string.ascii_letters) for _ in range(7)]), description="some description")
        discount.save()
