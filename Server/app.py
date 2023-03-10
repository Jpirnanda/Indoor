from flask import Flask
from flask_cors import CORS, cross_origin
from flask_ngrok import run_with_ngrok

app = Flask(__name__)
run_with_ngrok(app)

CORS(app)

