from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import uuid


app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST'])
def add_post():
    try:
        file = request.files["image"]
    except:
        return jsonify({
            "success": "false",
            "msg": "no file in request"
        })
    
    data = file.read()
    newFile = FileContent(name=file.filename, data=data)
    print(newFile)

    return str(file)