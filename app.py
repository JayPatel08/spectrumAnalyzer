from flask import Flask,render_template,make_response,request
import requests
import json
import os
from flask_cors import CORS

TEMPLATE_DIR = os.path.abspath('./templates')
STATIC_DIR = os.path.abspath('./static')
app=Flask(__name__,static_folder=STATIC_DIR,template_folder=TEMPLATE_DIR)
CORS(app)

@app.route("/",methods=["GET"])
@app.route("/api",methods=["GET"])
@app.route("/api/home",methods=["GET"])
def home():
    return render_template("index.html")

#For Getting Starting Continuous Acquisition
@app.route("/start")
def start():
    res = requests.get("https://flaskosa.herokuapp.com/cmd/TRACE")
    data = res.json()
    response=make_response(json.dumps([data['xdata'],data['ydata']]))
    response.content_type = 'application/json'
    return response

#For Getting Single Trace
@app.route("/single",methods=["GET","POST"])
def single():
    minimum=int(request.args.get('minLimit'))
    maximum=int(request.args.get('maxLimit'))
    print(min,max)
    res = requests.get("https://flaskosa.herokuapp.com/cmd/TRACE")
    data = res.json()
    response = make_response(json.dumps({"xdata":data['xdata'][minimum:maximum],"ydata":data['ydata'][minimum:maximum]}))
    response.content_type = 'application/json'
    return response


if __name__=="__main__":
    app.run(debug=True)