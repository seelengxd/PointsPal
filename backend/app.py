from flask_cors import CORS
from flask import Flask
from models import Merchant, Discount
from peewee import prefetch, JOIN
from playhouse.shortcuts import model_to_dict

app = Flask(__name__)
CORS(app)


@app.route("/")
def root():
    return {"message": "hello world!!"}


@app.route("/api/merchants")
def merchantsIndex():
    """Returns an array of merchants with their discount data"""
    return [model_to_dict(merchant, backrefs=True) for merchant in Merchant.select(Merchant).join(
        Discount, JOIN.LEFT_OUTER)]
