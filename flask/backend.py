from flask import Flask, request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/upload/', methods=['POST'])
def upload_file():
    file = request.files['file']
    file.save("image.jpg")
    # do something with the file
    print(type(file))
    
    
    return 'File uploaded successfully'


@app.route('/api/data', methods=['POST'])
def send_data():
    data = {
        'message': 'Hello World!',
        'count': 42
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16 MB limit

app.run(host='localhost',port=5000)