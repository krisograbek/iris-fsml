# Description

This is my first Full Stack Machine Learning Projects. You can play with the App directly on [Heroku](https://iris-flask-react.herokuapp.com/)

## Sources

This repository is bootstraped from [this template](https://github.com/krisograbek/react-flask-template). The template itself is based on [this tutorial](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project) by Miguel Grinberg and Create React App.

The Machine Learning model was trained using the parameters from the "Hands-on Machine Learning" book by Aurelion Geron. The code is [here](https://github.com/ageron/handson-ml2/blob/master/04_training_linear_models.ipynb) - cell 63. 

# Running the project

## Preparing a Flask API Backend

### Create and run `virtualenv`

```
$ cd api
$ python3 -m venv venv
$ source venv/bin/activate
```
Note that the above is for Unix-based operating systems. If you are using Windows, then you will do this instead:

```
$ cd api
$ python3 -m venv venv
$ venv\Scripts\activate
```

### Install packages from `requirements.txt`

`(venv) $ pip install -r requirements.txt`

### Run Flask Backend

```
(venv) $ cd ..
(venv) $ npm run start-api
```

## Run Frontend

### Open a second terminal in the project directory

### `npm install`

Installs packages from `package.json`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

