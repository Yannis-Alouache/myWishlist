from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
from flask_mysqldb import MySQL
from werkzeug.utils import secure_filename
import os
import uuid


UPLOAD_FOLDER = "./upload"
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'yannis'
app.config['MYSQL_PASSWORD'] = 'a'
app.config['MYSQL_DB'] = 'mywishlistdb'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

mysql = MySQL(app)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/', methods=['POST'])
def add_product():

    title = request.form.get('title')
    link = request.form.get('link')
    price = request.form.get('price')
    image = request.files.get('image')

    if title == "":
        return jsonify({
            "success": "false",
            "msg": "Le titre est obligatoire"
        })
    if link == "":
        return jsonify({
            "success": "false",
            "msg": "Le lien est obligatoire"
        })
    if price == "":
        return jsonify({
            "success": "false",
            "msg": "Le prix est obligatoire"
        })
    if image.filename == "":
        return jsonify({
            "success": "false",
            "msg": "L'image est obligatoire"
        })
    
    if allowed_file(image.filename):
        filename = secure_filename(image.filename)
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    
    cursor = mysql.connection.cursor()


    return "FILE NOT UPLOADED"