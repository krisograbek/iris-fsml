import pickle
from flask import Flask
from flask import request


app = Flask(__name__, static_folder='./client/build', static_url_path='/')

# load pretrained model
with open("./models/iris/softmax_reg.pkl", "rb") as f:
    model = pickle.load(f)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/predict/<val1>')
@app.route('/api/predict/<val1>/<val2>')
def get_prediction(val1, val2=None):
    # print(model.coef_)
    val1 = float(val1)
    if not val2:
        prediction = 2*val1
    else:
        val2 = float(val2)
        prediction = val1 + val2

    # predictions using fixed coef and intercept
    # dot = compute_dot(val1, val2)
    # probas = softmax(dot) * 100
    # prediction = int(predict(probas))

    # predictions from model
    dot = model.decision_function([[val1, val2]])[0]
    probas = model.predict_proba([[val1, val2]])[0] *100
    prediction = model.predict([[val1, val2]])[0]
    prediction = int(prediction)

    return {
        'dot': list(dot),
        'probas': list(probas),
        'prediction': prediction
        }

if __name__ == "__main__":
    app.run()
