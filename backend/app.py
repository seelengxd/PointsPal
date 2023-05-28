from flask_cors import CORS
from flask import Flask

app = Flask(__name__)
CORS(app)


@app.route("/")
def root():
    return {"message": "hello world!!"}
