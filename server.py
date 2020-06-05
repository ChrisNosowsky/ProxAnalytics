from flask import Flask
from json import dumps
from flask_jsonpify import jsonify
from flask_restful import Api, Resource
from flask_cors import CORS, cross_origin

app = Flask(__name__)
api = Api(app)

CORS(app)


@app.route('/')
def index():
    return jsonify({'text': 'Hello World!'})

class Employees(Resource):
    def get(self):
        return {'employees': [{'id':1, 'name':'Chris'}, {'id':2, 'name':'Mariah'}]}

class Employees_Name(Resource):
    def get(self, employee_id):
        print('Employee id: ' + employee_id)
        result = {'data': {'id':1, 'name': 'Chris'}}
        return jsonify(result)


api.add_resource(Employees, '/employees')
api.add_resource(Employees_Name, '/employees/<employee_id>')


if __name__ == '__main__':
    app.run(port=5002)