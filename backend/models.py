# from peewee import *
from playhouse.postgres_ext import *

from dotenv import load_dotenv
import os

load_dotenv()

host = os.getenv("POSTGRES_HOST")
port = os.getenv("POSTGRES_PORT")
user = os.getenv("POSTGRES_USER")
password = os.getenv("POSTGRES_PASSWORD")

db = PostgresqlExtDatabase('points_pal', user=user,
                           host=host, port=port, password=password)

#######################################################


class Merchant(Model):
    """
    ORM model of the Merchant table
    """
    name = CharField()
    type = IntegerField()
    image = TextField()

    class Meta:
        database = db


class Discount(Model):
    """
    ORM model of the Discount table
    """
    title = CharField()
    code = CharField()
    description = CharField()
    merchant = ForeignKeyField(Merchant, backref="discounts")

    class Meta:
        database = db


class Customer(Model):
    id = CharField(primary_key=True)
    test = CharField()

    class Meta:
        database = db

    @staticmethod
    def getCustomer(id):
        try:
            customer = Customer.get(Customer.id == id)
            if not customer:
                raise DoesNotExist()
            return customer
        except:
            new_user = Customer.create(id=id, test="test")
            return new_user


if __name__ == "__main__":
    db.connect()
    db.drop_tables([Merchant, Discount, Customer])
    db.create_tables([Merchant, Discount, Customer])
