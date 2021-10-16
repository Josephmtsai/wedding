from flask import Flask, jsonify, render_template
from flask_cors import CORS


# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__,
            static_folder = "./dist/static",
            template_folder = "./dist")
app.config.from_object(__name__)

# enable CORS
CORS(app)


# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')
@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run()