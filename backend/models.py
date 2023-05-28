from peewee import *

db = PostgresqlDatabase('points_pal', user='postgres',
                        host="127.0.0.1", port=5432)

#######################################################


class Merchant(Model):
    """
    ORM model of the Merchant table
    """
    name = CharField()
    type = IntegerField()

    class Meta:
        database = db


class Discount(Model):
    """
    ORM model of the Discount table
    """
    title = CharField()
    code = CharField()
    description = CharField()
    merchant = ForeignKeyField(Merchant, backref="merchants")

    class Meta:
        database = db


db.connect()
db.create_tables([Merchant, Discount])
