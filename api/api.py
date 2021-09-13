from flask import Flask
from flask import request

from lin_alg import compute_dot, softmax, predict

app = Flask(__name__)

@app.route('/api/value')
def get_val():
    return {'value': 'some value'}

@app.route('/api/predict/<val1>')
@app.route('/api/predict/<val1>/<val2>')
def get_prediction(val1, val2=None):
    val1 = float(val1)
    if not val2:
        prediction = 2*val1
    else:
        val2 = float(val2)
        prediction = val1 + val2

    dot = compute_dot(val1, val2)
    probas = softmax(dot)
    prediction = predict(probas)
    probas = probas *100
    
    return {
        'dot': list(dot),
        'probas': list(probas),
        'prediction': int(prediction)
        }
