from flask_cors import CORS
from flask import Flask
from models import Merchant, Discount
from peewee import prefetch, JOIN

app = Flask(__name__)
CORS(app)


@app.route("/")
def root():
    return {"message": "hello world!!"}


@app.route("/api/merchants")
def merchantsIndex():
    print(dir(JOIN))
    print([merchant for merchant in Merchant.select().join(
        Discount, JOIN.LEFT_OUTER).dicts()])

    return {}
