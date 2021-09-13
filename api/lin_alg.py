import numpy as np


def predict(arr):
    return np.argmax(arr)

def softmax(arr):
    return np.exp(arr) / np.sum(np.exp(arr))

def compute_dot(length, width):
    theta = np.array([[-4.58614563, -2.24129385, 18.87514796],
        [ 0.16068263, -2.15860167, 6.3844344],
        [ 4.425463  ,  4.39989552, -25.25958236]])

    x = np.array([length, width, 1])

    scores = np.dot(theta, x)
    return scores
