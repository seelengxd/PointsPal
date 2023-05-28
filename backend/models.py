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


class User(Model):
    id = CharField(primary_key=True)

    class Meta:
        database = db

    @staticmethod
    def getUser(id):
        try:
            return User.get_by_id(id)
        except DoesNotExist:
            new_user = User(id=id)
            new_user.save()
            return new_user


if __name__ == "__main__":
    db.connect()
    db.drop_tables([Merchant, Discount, User])
    db.create_tables([Merchant, Discount, User])
