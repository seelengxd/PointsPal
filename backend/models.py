# from peewee import *
from playhouse.postgres_ext import *

db = PostgresqlExtDatabase('points_pal', user='postgres',
                           host="127.0.0.1", port=5432)

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


if __name__ == "__main__":
    db.connect()
    db.drop_tables([Merchant, Discount])
    db.create_tables([Merchant, Discount])
